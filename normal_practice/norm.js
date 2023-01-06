function validname()
{
var name1=document.getElementById("t1").value;
var nameRegex = /^[a-zA-Z\-]+$/;
var validname = nameRegex.test(name1);
if(validname)
{
    
document.getElementById("er1").innerHTML="name ok"
}
else
{     
document.getElementById("er1").innerHTML="please enter correctly"
}
}
function passcheck()
{
    var pass=document.getElementById("ps1").value;
    var passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(passreg.test(pass))
    {
        document.getElementById("er3").innerHTML="all ok";
    }
    else
    {
        document.getElementById('er3').innerHTML="Input Password and Submit [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]";
    }
}