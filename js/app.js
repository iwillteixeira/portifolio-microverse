const btnMobile = document.querySelector('#btnmobile');
const menuMobile = document.querySelector('#menu-mobile');
const closeMenuBtn = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.mobile-menu-items > a');
const menuItemsDesk = document.querySelectorAll(".nav-desk-li > a")

function closeUp() {
  menuMobile.classList.add('animate__fadeOutUp');
  menuMobile.classList.remove('animate__backInDown', 'showUp', 'animate__fadeOutUp');
}

function scrollTosection(e){
  console.log(e)
  const linkItems = e.getAttribute('href');
  document.getElementById(linkItems).scrollIntoView({
    behavior: 'smooth',
  });
}

function closeItems(e) {
  
  let obj = this;
  
  closeUp(obj);
  scrollTosection(obj)
  
}

function showUp(e) {
  e.preventDefault();
  closeMenuBtn.addEventListener('click', closeUp);
  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', closeItems);
  }
  menuMobile.classList.add('animate__backInDown', 'showUp');
}

for (let i = 0; i < menuItems.length; i += 1) {
  menuItemsDesk[i].addEventListener('click', closeItems);
}

btnMobile.addEventListener('click', (a) => {
  showUp(a);
});
