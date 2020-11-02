const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

function showError (input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error"
    const small=formControl.querySelector("small")
    small.innerText =message;
}
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className="form-control success"
}

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener ('submit',function(e){
    e.preventDefault();
    if (username.value===""){
        showError(username,"Please provide a username")
    }else (showSuccess(username))

    if (email.value===""){
        showError(email,"Please provide an email ")
    }else if (!isValidEmail(email.value)){
        showError(email,"Invalid Email")
    }else (showSuccess(email))

    if (password.value===""){
        showError(password,"Please provide a Password")
    }else (showSuccess(password))

    if (password2.value===""){
        showError(password2,"Please provide a Password")
    }else (showSuccess(password2))

})