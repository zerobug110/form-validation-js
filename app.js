const inputName = document.querySelector('.input-name');
const inputLname = document.querySelector('.input-lname');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const inputConfirm = document.querySelector('.input-confirm');

const errorName = document.querySelector('.erorr-name');
const errorLname = document.querySelector('.erorr-lname');
const errorEmail = document.querySelector('.erorr-email');
const errorPassword = document.querySelector('.erorr-password');
const btn = document.querySelector('.submit-btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    function name(){
        if (inputName.value == '' || inputName.value == null) {
            errorName.style.display = "block";
        }
        else {
            errorName.style.display = "none";      
        }

    }

    function lname() {
        if (inputLname.value == '' || inputLname.value == null) {
            errorLname.style.display = "block";
        }
        else {
            errorLname.style.display = "none";      
        }
    }
    
    function email() {
        if (inputEmail.value == '' || inputEmail.value == null) {
            errorEmail.style.display = "block";
        }
        else {
            errorEmail.style.display = "none";      
        }
    }
    
    function password() {
        if (inputPassword.value !== inputConfirm || inputPassword.value == null) {
            errorPassword.style.display = "block";
        }
        
        else {
            errorPassword.style.display = "none";      
        }
    }

    name();
    lname();
    email();
    password();
})
