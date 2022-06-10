//Search

const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.querySelector('.search-overlay');
const closeBtn = document.querySelector('.close-btn');

[searchBtn, closeBtn].forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.classList.toggle('search-overlay-active');
    })
});

//Hamburger menu

const hamburger = document.querySelector('.navbar__hamburger');
const mainMenu = document.querySelector('.navbar__menu');
const closeBtnMobile = document.querySelector('.navbar__close');

[hamburger, closeBtnMobile].forEach(function(item){
    item.addEventListener('click',() => {
        mainMenu.classList.toggle('active');
        searchBtn.classList.toggle('active--hamburger');
        hamburger.classList.toggle('active--hamburger');
        closeBtnMobile.classList.toggle('active--hamburger');
    })
});

//First Slider

const slider = document.getElementById('slider-content');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const card = document.querySelector('.slider__card--primary');
const cards = document.querySelectorAll('.slider__card--primary');
let cardWidth = card.offsetWidth;
let cardMargin = parseInt((card.currentStyle || window.getComputedStyle(card)).marginRight);
let windowWidth = window.innerWidth;
let numOfSlides = 0;
let slideNumber = 0;

if (windowWidth < 768) {
    numOfSlides = cards.length - 1;
}  else {
    numOfSlides = cards.length - 2;
};

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

let secondSliderNumber = 0;

btnNextSliderSecond.addEventListener('click',() => {
    if (secondSliderNumber < numOfSlides) {
        secondSliderNumber++;
    } else {
      return secondSliderNumber;
    }
    sliderSecond.style.transform = `translateX(-${secondSliderNumber*(cardWidth+cardMargin)}px)`;
});
  
btnPrevSliderSecond.addEventListener('click',() => {
    if (secondSliderNumber > 0) {
        secondSliderNumber--;
    } else {
      return secondSliderNumber;
    }
    sliderSecond.style.transform = `translateX(-${secondSliderNumber*(cardWidth+cardMargin)}px)`;
});


// Dropdown in Navbar on mobile devices

const dropdownFirstItem = document.getElementById('navbar-dropdown-first');
const dropdownSecondItem = document.getElementById('navbar-dropdown-second');

const arrowFirstItem = document.getElementById('navbar-arrow');
const arrowSecondItem = document.getElementById('navbar-arrow-second');

const dropdownFirstList = document.getElementById('navbar-dropdown-first-list');
const dropdownSecondList = document.getElementById('navbar-dropdown-second-list');

const dropDownFn = (a, b) => {
    let count = 0;
    a.classList.toggle('navbar__dropdown--active');
    count++;
    if(count%2 !== 0 || count === 0) {
        b.classList.toggle('navbar__arrow--active');
    } else {
        b.classList.toggle('navbar__arrow--deactive');
    }
}

dropdownFirstItem.addEventListener('click', function() {
    dropDownFn(dropdownFirstList, arrowFirstItem);
}, false);

dropdownSecondItem.addEventListener('click', function() {
    dropDownFn(dropdownSecondList, arrowSecondItem);
}, false);


// Tabs section


let tabsText = [...document.querySelectorAll('.tabs__text')];
const tabsMenu = document.querySelector('.tabs__desktop');
const tabsArchivesButton = document.querySelector('.tabs__responsive');
const navTabs = [... document.querySelectorAll('.tab-nav')];
const tabLabels = [... document.querySelectorAll('.tab-nav-label')];

tabsArchivesButton.addEventListener('click', () => {
    tabsMenu.classList.toggle('active');
});

for(let i = 0; i < navTabs.length; i++) {
    navTabs[i].onclick = function() { 
        for(let j = 0; j < tabsText.length; j++) {
            tabsText[j].classList.remove('active');
        }
        tabsText[i].classList.toggle('active');
        document.querySelector('.tabs__selected-option').textContent = tabLabels[i].innerHTML;
    };
}


//Expand text section //


let iconRemove = [... document.querySelectorAll('.icon-remove')];
let iconAdd = [... document.querySelectorAll('.icon-add')];
let expandText = [... document.querySelectorAll('.expand__text')];

let expandButton = [... document.querySelectorAll('.expand__heading')];

for(let i = 0; i < expandButton.length; i++) {
    expandButton[i].addEventListener('click', () => {
        iconRemove[i].classList.toggle('icon--active');
        iconAdd[i].classList.toggle('icon--active');
        expandText[i].classList.toggle('expand__text--active');
    });
}
