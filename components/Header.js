// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headCardAdder = document.querySelector('.header-container');

function Header(object) {
    const headerFun = document.createElement('div');
    const spanOne = document.createElement('span');
    const hOne = document.createElement('h1');
    const spanTwo = document.createElement('span');

    headerFun.appendChild(spanOne);
    headerFun.appendChild(hOne);
    headerFun.appendChild(spanTwo);

    headerFun.classList.add('header');
    spanOne.classList.add('date');
    spanTwo.classList.add('temp');

    spanOne.textContent = "MARCH 28, 2020";
    hOne.textContent = "Lambda Times";
    spanTwo.textContent = `98 Degrees`;

    return object.appendChild(headerFun);
}

Header(headCardAdder);