
const modal = document.querySelector(".shadow");
const mobileBt = document.querySelector(".button-mobile");
const close = document.querySelector(".close-menu");
const itemsMenu = document.querySelectorAll(".modal-mobile ul li a");


for(const a of itemsMenu){
    a.addEventListener("click", ()=>{
        console.log(a)
        closeItemsMenu(a)
    });

}

mobileBt.addEventListener("click", (e)=>{
    showsAnim(e)
    close.addEventListener("click", closeWindow);

});
function showsAnim(e){
    e.preventDefault();
    modal.classList.add("animate__backInDown", "showUp");
}
function closeWindow(e){

    modal.classList.add("animate__backOutDown");
    modal.classList.remove("animate__backOutDown","animate__backInDown", "showUp");  
}
function closeItemsMenu(e){

    modal.classList.add("animate__backOutDown");
    modal.classList.remove("animate__backOutDown","animate__backInDown", "showUp");  
    let href = e.getAttribute("href");  
    document.getElementById(href).scrollIntoView({behavior: "smooth"});

}

function fibo (num){
    let m=0
    let n = 1;
    let store = 0
    arr = []
    while(n<=num){
        if(m <1){
          arr.push(1)
        }
        store = n + m
        arr.push(store)
        m = n;
        n = store;  
    }
    console.log(arr)
    let gen = arr.filter((e)=> e%2 !== 0).reduce((f,h)=>{
        return f+h
    })
    console.log(gen)
}
console.log(fibo(20));


