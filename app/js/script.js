//Search

const searchBtn = document.querySelectorAll('.search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeBtn = document.querySelectorAll('.close-btn');

searchBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.style.display = 'flex';
    })
});

closeBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.style.display = 'none';
    })
});

//Hamburger 

const hamburger = document.querySelector('.navbar__hamburger');
const mainMenu = document.querySelector('.navbar__menu');
const search = document.querySelector('.navbar__search');
const closeBtnMobile = document.querySelector('.navbar__close');
const width = window.innerWidth;
const expand = document.querySelector('.navbar__item--expand');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mainMenu.classList.toggle('active');
    search.style.display = 'none';
    hamburger.style.display = 'none';
    closeBtnMobile.style.display = 'inline-block';
});

closeBtnMobile.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mainMenu.classList.toggle('active');
    search.style.display = 'inline-block';
    hamburger.style.display = 'inline-block';
    closeBtnMobile.style.display = 'none';
});

//First Slider

const slider = document.getElementById('slider-content');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const card = document.querySelector('.slider__card--primary');
const cards = document.querySelectorAll('.slider__card--primary');
let cardWidth = card.offsetWidth;
let cardDimensions = card.currentStyle || window.getComputedStyle(card);
let cardMargin = parseInt(cardDimensions.marginRight);
let windowWidth = window.innerWidth;
let numOfSlides = 0;

if (windowWidth < 768) {
    numOfSlides = cards.length - 1;
}  else {
    numOfSlides = cards.length - 2;
}

let slideNumber = 0;

btnNext.addEventListener('click',() => {
    if (slideNumber < numOfSlides) {
        slideNumber++;
    } else {
      return slideNumber;
    }
    slider.style.transform = `translateX(-${slideNumber*(cardWidth+cardMargin)}px)`;
});
  
btnPrev.addEventListener('click',() => {
    if (slideNumber > 0) {
        slideNumber--;
    } else {
      return slideNumber;
    }
    slider.style.transform = `translateX(-${slideNumber*(cardWidth+cardMargin)}px)`;
});

//Second slider 

const sliderSecond = document.getElementById('slider-content--secondary');
const btnPrevSliderSecond = document.getElementById('btn-prev-second');
const btnNextSliderSecond = document.getElementById('btn-next-second');


let slideNumberSecond = 0;

btnNextSliderSecond.addEventListener('click',() => {
    if (slideNumberSecond < numOfSlides) {
        slideNumberSecond++;
    } else {
      return slideNumberSecond;
    }
    sliderSecond.style.transform = `translateX(-${slideNumberSecond*(cardWidth+cardMargin)}px)`;
});
  
btnPrevSliderSecond.addEventListener('click',() => {
    if (slideNumberSecond > 0) {
        slideNumberSecond--;
    } else {
      return slideNumberSecond;
    }
    sliderSecond.style.transform = `translateX(-${slideNumberSecond*(cardWidth+cardMargin)}px)`;
});


// Dropdown 

const dropDownFirstItem = document.getElementById('navbar-dropdown-first');
const dropDownSecondItem = document.getElementById('navbar-dropdown-second');

const arrowFirstItem = document.getElementById('navbar-arrow');
const arrowSecondItem = document.getElementById('navbar-arrow-second');

const dropDownFirstList = document.getElementById('navbar-dropdown-first-list');
const dropDownSecondList = document.getElementById('navbar-dropdown-second-list');

let countFirst = 0;

dropDownFirstItem.addEventListener('click', () => {
    dropDownFirstList.classList.toggle('navbar__dropdown--active');
    countFirst++;
    if(countFirst%2 !== 0 || countFirst === 0) {
        arrowFirstItem.style.transform = `rotate(90deg)`;
    } else {
        arrowFirstItem.style.transform = `rotate(0deg)`;
    }
});

let countSecond = 0;

dropDownSecondItem.addEventListener('click', () => {
    dropDownSecondList.classList.toggle('navbar__dropdown--active');
    countSecond++;
    if(countSecond%2 !== 0 || countSecond === 0) {
        arrowSecondItem.style.transform = `rotate(90deg)`;
    } else {
        arrowSecondItem.style.transform = `rotate(0deg)`;
    }
});


// Tabs
let tabsText = [...document.querySelectorAll('.tabs__text')];
const tabsMenu = document.querySelector('.tabs__desktop');
const tabsArchivesButton = document.querySelector('.tabs__responsive');


tabsArchivesButton.addEventListener('click', () => {
    tabsMenu.classList.toggle('active');
});


document.querySelector('.tab-nav-1').onclick = function() { 
    for(let i = 0; i < tabsText.length; i++) {
        tabsText[i].classList.remove('active');
    }
    tabsText[0].classList.toggle('active');
    document.querySelector('.tabs__selected-option').textContent = '2021';
};
document.querySelector('.tab-nav-2').onclick = function() { 
    for(let i = 0; i < tabsText.length; i++) {
        tabsText[i].classList.remove('active');
    }
    tabsText[1].classList.toggle('active');
    document.querySelector('.tabs__selected-option').textContent = '2020';
};
document.querySelector('.tab-nav-3').onclick = function() { 
    for(let i = 0; i < tabsText.length; i++) {
        tabsText[i].classList.remove('active')
    }
    tabsText[2].classList.toggle('active');
    document.querySelector('.tabs__selected-option').textContent = '2019';
};
document.querySelector('.tab-nav-4').onclick = function() { 
    for(let i = 0; i < tabsText.length; i++) {
        tabsText[i].classList.remove('active')
    }
    tabsText[3].classList.toggle('active');
    document.querySelector('.tabs__selected-option').textContent = '2018';
};



//Expand text section //
let iconRemove = [... document.querySelectorAll('.icon-remove')];
let iconAdd = [... document.querySelectorAll('.icon-add')];
let expandText = [... document.querySelectorAll('.expand__text')];
let expandButtonFirst = document.getElementById('expand__heading-first');
let expandButtonSecond = document.getElementById('expand__heading-second');
let expandButtonThird = document.getElementById('expand__heading-third');


expandButtonFirst.addEventListener('click', () => {
        iconRemove[0].classList.toggle('icon--active');
        iconAdd[0].classList.toggle('icon--active');
        expandText[0].classList.toggle('expand__text--active');
});

expandButtonSecond.addEventListener('click', () => {
    iconRemove[1].classList.toggle('icon--active');
    iconAdd[1].classList.toggle('icon--active');
    expandText[1].classList.toggle('expand__text--active');
});

expandButtonThird.addEventListener('click', () => {
    iconRemove[2].classList.toggle('icon--active');
    iconAdd[2].classList.toggle('icon--active');
    expandText[2].classList.toggle('expand__text--active');
});
