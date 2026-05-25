const formContainer = document.getElementById("form-container");
const signform = document.getElementById("signform");
const inputs = document.querySelectorAll("input");
// const myinput1 = document.getElementById("myinput1");
// const myinput2 = document.getElementById("myinput2");
// const myinput3 = document.getElementById("myinput3");
// const myinput4 = document.getElementById("myinput4");
// const myinput5 = document.getElementById("myinput5");
// const myinput6 = document.getElementById("myinput6");
// const myinput7 = document.getElementById("myinput7");
// const myinput8 = document.getElementById("myinput8");
// const myinput9 = document.getElementById("myinput9");
const mysin = document.getElementById("mysin");


const stateSec = document.querySelector(".state-sec");
const stateCon = document.querySelector(".state-con");

const logInBack = document.querySelector(".login-back");

logInBack.addEventListener("click", () => {
    formContainer.style.display = "block"
    stateSec.style.display = "none"
    stateCon.style.display = "none" 
    formContainer.reset();
})
//const Loadingscreen = document.getElementById("Loadingscreen");

formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    const message3 = document.getElementById("message3");
    const message4 = document.getElementById("message4");
    const message5 = document.getElementById("message5");
    const message6 = document.getElementById("message6");
    const message7 = document.getElementById("message7");
    const message8 = document.getElementById("message8");
    
    let isValid = true;
    let name = myinput1.value
    if(name === ""){
        message1.textContent = "⚠ Your name is required";
        isValid = false;
    }
    else{
          message1.textContent = "";
    }

    let email = myinput2.value
    if(email === ""){
        message2.textContent = "⚠ Your email is required";
        isValid = false;
    }
    else{
          message2.textContent = "";
    }

    let mobil = myinput3.value
   
    if(mobil === ""){
        message3.textContent = "⚠ Your mobil number is required";
        isValid = false;
    }
    else if(mobil.length <= 10){
        message3.textContent = "⚠ Your mobil number can't be less or greater than 11";
    }
    else{
          message3.textContent = "";
    }

    let pass1 = myinput4.value
    if(pass1 === ""){
        message4.textContent = "⚠ Your Password is required";
        isValid = false;
    }
    else if(pass1.length < 8){
        message4.textContent = "⚠ Your Password should not be less than 8 digit";
    }
    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(pass1)){
        message4.textContent = "⚠ Your Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)";
    }
    else{
        message4.textContent = "";
    }
    
    let pass2 = myinput5.value
    if(pass1 !== pass2 ){
        message5.textContent = "⚠ Password doesn't match";
        isValid = false;
    }
    else{
          message5.textContent = "";
    }

    let verification = myinput6.value
    if(verification === ""){
        message6.textContent = "⚠ Enter a verification number";
        isValid = false;
    }
    else if(verification.length < 10){
        message6.textContent = "⚠ Your verification number should not be less than 10 digits";
    }
    else{
          message6.textContent = "";
    }

    if(myinput7.checked || myinput8.checked){
        message7.textContent = ""
    }
    else{
        message7.textContent = "⚠ You have NOT selected a verification Method"
        isValid = false;
    }

    
    if(myinput9.checked){
        message8.textContent = "";
    }
    else{
          message8.textContent = "⚠ You have not agree with our policy ";
          isValid = false;
    }
    
    if (isValid) {
        stateSec.style.display = "block"
        stateCon.style.display = "block"
        formContainer.style.display = "none"
    }
   
});

// formContainer.onclick = function(){
    
   
// }
