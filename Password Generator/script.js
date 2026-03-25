function generatePassword(){

let length=document.getElementById("length").value;
let numbers=document.getElementById("numbers").checked;
let uppercase=document.getElementById("uppercase").checked;
let symbols=document.getElementById("symbols").checked;
let exclude=document.getElementById("exclude").checked;

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num="0123456789";
let sym="!@#$%^&*()_+";

let chars=lower;

if(uppercase) chars+=upper;
if(numbers) chars+=num;
if(symbols) chars+=sym;

if(exclude){
chars=chars.replace(/[lI1O0]/g,"");
}

let password="";

for(let i=0;i<length;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("password").value=password;

checkStrength(password);
}

function togglePassword(){
let pass=document.getElementById("password");

if(pass.type==="password"){
pass.type="text";
}else{
pass.type="password";
}
}

function copyPassword(){
let pass=document.getElementById("password");
pass.select();
document.execCommand("copy");
alert("Password copied!");
}

function checkStrength(password){

let strength=0;

if(password.length>=8) strength++;
if(/[A-Z]/.test(password)) strength++;
if(/[0-9]/.test(password)) strength++;
if(/[!@#$%^&*]/.test(password)) strength++;

let bar=document.getElementById("strength-bar");
let text=document.getElementById("strength-text");

if(strength<=1){
bar.style.width="25%";
bar.style.background="red";
text.innerText="Weak";
}
else if(strength==2){
bar.style.width="50%";
bar.style.background="orange";
text.innerText="Medium";
}
else if(strength==3){
bar.style.width="75%";
bar.style.background="yellowgreen";
text.innerText="Strong";
}
else{
bar.style.width="100%";
bar.style.background="green";
text.innerText="Very Strong";
}

}