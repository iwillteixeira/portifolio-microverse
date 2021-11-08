const btnMobile = document.querySelector("#btnmobile");
const menuMobile= document.querySelector("#menu-mobile");
const closeMenuBtn = document.querySelector(".close-menu");
const menuItems = document.querySelectorAll(".mobile-menu-items  a");


for(let i of menuItems){
    
    i.addEventListener("click", function(e){
        e.preventDefault();
        linkItems = i.getAttribute("href");
        closeUp(e)
        document.getElementById(linkItems).scrollIntoView({
            behavior:"smooth"
        })
        

    });
        

        
}

btnMobile.addEventListener("click", function(a){
    showUp(a);
});


function showUp(e){
    e.preventDefault();
    closeMenuBtn.addEventListener("click", closeUp);
    menuMobile.classList.add("animate__backInDown","showUp") ;
}

function closeUp(){
    menuMobile.classList.add("animate__fadeOutUp");
    menuMobile.classList.remove("animate__backInDown","showUp", "animate__fadeOutUp");
}

