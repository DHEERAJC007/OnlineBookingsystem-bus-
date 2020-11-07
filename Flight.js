function formvalidation() {
var email=document.getElementById ("email").value;pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(pattern))
{
return true;
}
else{
alert("email should contain @ in it");
}
var pass=document.getElementById("psw").value;
var alphanum = /^[A-Z,a-z,0-9]+$/;
if(pass.match(alphanum))
{
return true;
}
else{alert("password should contain only alphanumeric characters");
}
}
function payment()
{
var acc_no=document.getElementById("acc_no").value;
var cal=acc_no.length
if(cal>11 || cal<11)
{
alert("account no should contain exact 11characters");
}
var alphanum = /^[A-Z,0-9]+$/;
if(acc_no.match(alphanum))
{
return true;}
else{
alert("account no should contain only alpha numeric characters");
}
var pin=document.getElementById("pin").value;
var len=pin.length;
if(len>4 ||len<4){
alert("pin should contain 4 numbers");
}
var numbers = /^[0-9]+$/;
if(pin.match(numbers))
{
return true;
}
else{alert("password should contain only number s");
} 
var amt=document.getElementById("amt").value; 
var numbers = /^[0-9]+$/; 
if(amt.match(numbers)) {
return true; } 
else{ alert("amoumnt should contain only numbers" );
}
}