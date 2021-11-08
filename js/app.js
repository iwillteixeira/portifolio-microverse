const btnMobile = document.querySelector("#btnmobile");
const menuMobile= document.querySelector("#menu-mobile");
const closeMenuBtn = document.querySelector(".close-menu");

btnMobile.addEventListener("click", showUp);
closeMenuBtn.addEventListener("click", closeUp);

function showUp(){
    menuMobile.classList.add("animate__backInDown","showUp")
}

function closeUp(){
    menuMobile.classList.add("animate__fadeOutUp")
    menuMobile.addEventListener("animationend", removeClasses)
}

function removeClasses(){
    menuMobile.classList.remove("animate__backInDown","showUp")
    menuMobile.classList.remove("animate__fadeOutUp")
}