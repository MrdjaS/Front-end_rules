//Search

const searchBtn = document.getElementById('search-btn');
const searchBtnSmall = document.getElementById('search-btn-small');
const searchOverlay = document.getElementById('search-overlay');
const closeBtn = document.getElementById('close-btn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchOverlay.style.display = 'block';
});

searchBtnSmall.addEventListener('click', (e) => {
    e.preventDefault();
    searchOverlay.style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchOverlay.style.display = 'none';
})