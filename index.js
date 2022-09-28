const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
let small = document.querySelector("small")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
  
    checkInputs()
});

function checkInputs(){
    const fnameValue = firstName.value;
    const lnameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    
    if (fnameValue === ""){
        setErrorMessage(firstName, "First Name cannot be empty");
    }else{
        setSuccessMessage(firstName);
    }

    if (lnameValue === ""){
        setErrorMessage(lastName, "Last Name cannot be empty");
    }else{
        setSuccessMessage(lastName);
    }

    if (emailValue === ""){
        setErrorMessage(email, "Email cannot be empty");  
    }else if (!isEmail(emailValue)){
        setErrorMessage(email, "Looks like this not an email"); 
    }else{
        setSuccessMessage(email);
    }

    if (passwordValue === ""){
        setErrorMessage(password, "Password cannot be empty");  
    }else{
        setSuccessMessage(password); 
    }
}



function setErrorMessage(input, message){
    const formControl = input.parentElement;
    const smallEl = formControl.querySelector("small")

    smallEl.textContent = message;

    formControl.className = "form-control error"

}
function setSuccessMessage(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

