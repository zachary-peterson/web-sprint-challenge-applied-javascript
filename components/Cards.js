// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const actualArticles = 'https://lambda-times-backend.herokuapp.com/articles';

const artCardAdd = document.querySelector('.cards-container')

axios.get(actualArticles)
.then(function(suc){
    console.log(suc);
    const javaArt = suc.data.articles.javascript;
    const bootArt = suc.data.articles.bootstrap;
    const jqueryArt = suc.data.articles.jquery;
    const nodeArt = suc.data.articles.node;
    const techArt = suc.data.articles.technology;
    makeArtCard(javaArt);
    makeArtCard(bootArt);
    makeArtCard(jqueryArt);
    makeArtCard(nodeArt);
    makeArtCard(techArt);
    
})
.catch(function(_){
    console.log('Error, check line 45')
})

function makeArtCard(object){
    object.forEach(obj => {
        const artDiv = document.createElement('div');
        const artHL = document.createElement('div');
        const artAuth = document.createElement('div');
        const artIMG = document.createElement('div');
        const artSpan = document.createElement('span');

        artDiv.appendChild(artHL);
        artDiv.appendChild(artAuth);
        artAuth.appendChild(artIMG);
        artAuth.appendChild(artSpan);

        artDiv.classList.add('card');
        artHL.classList.add('headline');
        artAuth.classList.add('author');
        artIMG.classList.add('img-container');

        artHL.textContent = obj.headline;
        artIMG.innerHTML = `<img src=${obj.authorPhoto} />`;
        artSpan.textContent = obj.authorName;

        artCardAdd.appendChild(artDiv);

        artDiv.addEventListener('click', function(e){
            console.log(artHL.textContent);
        })
});
}
