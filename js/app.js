const btnMobile = document.querySelector("#btnmobile");
const menuMobile= document.querySelector("#menu-mobile");

btnMobile.addEventListener("click", showUp);

function showUp(){
    menuMobile.classList.add("animate__backInDown","showUp")
}