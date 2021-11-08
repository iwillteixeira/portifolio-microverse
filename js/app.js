const btnMobile = document.querySelector('#btnmobile');
const menuMobile = document.querySelector('#menu-mobile');
const closeMenuBtn = document.querySelector('.close-menu');
const portfolio = document.querySelector('#portfolio_menu');
const about = document.querySelector('#about_menu');
const contact = document.querySelector('#contact_menu');

function closeUp() {
  menuMobile.classList.add('animate__fadeOutUp');
  menuMobile.classList.remove('animate__backInDown', 'showUp', 'animate__fadeOutUp');
}

function closeItems(e) {
  e.preventDefault();
  const linkItems = this.getAttribute('href');
  closeUp(e);
  document.getElementById(linkItems).scrollIntoView({
    behavior: 'smooth',
  });
}

function showUp(e) {
  e.preventDefault();
  closeMenuBtn.addEventListener('click', closeUp);
  portfolio.addEventListener('click', closeItems);
  about.addEventListener('click', closeItems);
  contact.addEventListener('click', closeItems);
  menuMobile.classList.add('animate__backInDown', 'showUp');
}

btnMobile.addEventListener('click', (a) => {
  showUp(a);
});
