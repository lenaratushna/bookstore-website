window.addEventListener('scroll', () => {
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header__bottom').classList.add('active');
    } else {
        document.querySelector('.header__bottom').classList.remove('active');
    }
});

const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.header__search-form ');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});