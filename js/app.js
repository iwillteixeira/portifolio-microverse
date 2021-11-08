const btnMobile = document.querySelector('#btnmobile');
const menuMobile = document.querySelector('#menu-mobile');
const closeMenuBtn = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.mobile-menu-items > a');

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
  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', closeItems);
  }
  menuMobile.classList.add('animate__backInDown', 'showUp');
}

btnMobile.addEventListener('click', (a) => {
  showUp(a);
});
