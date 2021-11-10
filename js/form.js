const form = document.getElementById("form");
const name = document.getElementById("name_form");
const email = document.getElementById("email_form");
const message = document.getElementById("message");
const error = document.querySelector(".error-email")
const regex = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g

form.addEventListener("submit", (e)=>{
    if(regex.test(email.value)){
        error.textContent = ""
        email.style.border = '1px solid #cfd8dc';
    }
    else{
        e.preventDefault()
        email.style.border = '3px solid red';
        error.textContent = 'nooooo.'

    }
});
