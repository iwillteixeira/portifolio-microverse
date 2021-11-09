const btnMobile = document.querySelector('#btnmobile');
const menuMobile = document.querySelector('#menu-mobile');
const closeMenuBtn = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.mobile-menu-items > a');
const menuItemsDesk = document.querySelectorAll('.nav-desk-li > a');
const detailsbutton = document.querySelectorAll('.work-btn a');

function closeUp() {
  menuMobile.classList.add('animate__fadeOutUp');
  menuMobile.classList.remove('animate__backInDown', 'showUp', 'animate__fadeOutUp');
}

function scrollTosection(e) {
  const linkItems = e.getAttribute('href');
  document.getElementById(linkItems).scrollIntoView({
    behavior: 'smooth',
  });
}

function closeItems() {
  const obj = this;
  closeUp(obj);
  scrollTosection(obj);
}

function showUp(e) {
  e.preventDefault();
  const getEle = this.getAttribute('href');
  const eleItem = document.querySelector(getEle);
  closeMenuBtn.addEventListener('click', closeUp);
  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', closeItems);
  }
  eleItem.classList.add('animate__backInDown', 'showUp');
  const eleItemClose = eleItem.querySelector('.close-modal-details');
  eleItemClose.addEventListener('click', () => {
    eleItem.classList.remove('animate__backInDown', 'showUp', 'animate__fadeOutUp');
  });
}

for (let i = 0; i < detailsbutton.length; i += 1) {
  detailsbutton[i].addEventListener('click', showUp);
}

for (let i = 0; i < menuItems.length; i += 1) {
  menuItemsDesk[i].addEventListener('click', closeItems);
}

btnMobile.addEventListener('click', showUp);
