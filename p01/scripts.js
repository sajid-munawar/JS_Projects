const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (input.value===""){
        showError(input,"Email is required")
    }else if( re.test(String(input.value).toLowerCase())){
        showSuccess(input)
    }else{
        showError(input,"Invalid email")
    }
}

function getProperCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkLength(input, min, max) {
    if (input.value===""){
        showError(input,`${getProperCase(input)} can't be empty`)
    }else if (input.value.length < min) {
        showError(input, `${getProperCase(input)} should'nt be less than ${min}`)
    } else if (input.value.length > max) {
        showError(input, `${getProperCase(input)} should'nt be greater than ${max}`)
    } else {
        showSuccess(input)
    }
}

function checkPassword(input,input2){
    if (input.value===input2.value){
        showSuccess(input2)
    }else {showError(input2,"Password does not match")}
}

function checkReaquired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === "") {
            showError(input, `${getProperCase(input)} is required`)
        } else (showSuccess(input))
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkReaquired([username, email, password, password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    isValidEmail(email);
    checkPassword(password,password2);
})