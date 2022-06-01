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

    if(width > 768) {
        search.style.display = 'none';
        hamburger.style.display = 'none';
    }
});

closeBtnMobile.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mainMenu.classList.toggle('active');
    search.style.display = 'inline-block';
    hamburger.style.display = 'inline-block';
    closeBtnMobile.style.display = 'none';
});


