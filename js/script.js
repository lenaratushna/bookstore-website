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

const loginWindow = document.querySelector('.login');
const loginForm = document.querySelector('.login__form');
const loginBtn = document.querySelector('#login-btn');
const loginClose = document.querySelector('#close-login-btn');

loginBtn.addEventListener('click', () => {
    loginWindow.classList.add('active');
});

loginClose.addEventListener('click', () => {
    loginWindow.classList.remove('active');
});

loginWindow.addEventListener('click', () => {
    loginWindow.classList.remove('active');
});

loginForm.addEventListener('click', (e) => {
    e.stopPropagation();
});

var swiper = new Swiper('.arrivals-slider', {
    slidesPerView: 1,
    breakpoints: {
        440: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        880: {
            slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      },
  });