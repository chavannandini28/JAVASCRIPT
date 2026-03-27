const password = document.getElementById("password");
const strength = document.getElementById("strength");
const showPassword = document.getElementById("showPassword");

password.addEventListener("keyup", function(){

    let pass = password.value;

    let medium = /(?=.*[a-z])(?=.*[0-9])/;
    let strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if(pass.length < 6){
        strength.innerHTML = "Strength : Weak";
        strength.style.color = "red";
    }
    else if(strong.test(pass)){
        strength.innerHTML = "Strength : Strong";
        strength.style.color = "green";
    }
    else if(medium.test(pass)){
        strength.innerHTML = "Strength : Medium";
        strength.style.color = "orange";
    }
    else{
        strength.innerHTML = "Strength : Weak";
        strength.style.color = "red";
    }

});

showPassword.addEventListener("change", function(){

    if(showPassword.checked){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

});