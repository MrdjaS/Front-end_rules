//Search

const searchBtn = document.querySelectorAll('.search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeBtn = document.querySelectorAll('.close-btn');

searchBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.style.display = 'block';
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
const search = document.querySelector('.navbar__search-mobile');
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

//Slider 

const slider = document.getElementById('slider-content');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const card = document.getElementsByClassName('slider__card');

btnNext.addEventListener('click', () => {
    slider.append(card[0]);
});

btnPrev.addEventListener('click', () => {
    slider.prepend(card[card.length - 1]);
})



