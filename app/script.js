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