// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios';

const tabsFinder = document.querySelector('.topics');

const tabsImport = 'https://lambda-times-backend.herokuapp.com/topics';

axios.get(tabsImport)
.then(function(suc){
    const theTopics = suc.data.topics;
    theTopics.forEach(element => {
        const eachTab = document.createElement('div');
        eachTab.classList.add('tab');
        eachTab.innerHTML = element;
        tabsFinder.appendChild(eachTab);
    });
})
.catch(function(_){
    console.log('Error, check line 22')
})



