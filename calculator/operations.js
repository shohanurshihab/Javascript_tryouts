function sum()
{
    var box1=parseInt(document.getElementById("in1").value);
    var box2=parseInt(document.getElementById("in2").value);
    console.log(box1);
    if(document.getElementById("in1").value.length!=0&&document.getElementById("in2").value.length!=0){
    document.getElementById("in3").value=box1+box2;
    document.getElementById("op").innerHTML="+";
    }
    else{
        alert("Please Enter Values Properly");
    }
}
function subtract()
{
    var box1=parseInt(document.getElementById("in1").value);
    var box2=parseInt(document.getElementById("in2").value);
    console.log(box1);
    if(document.getElementById("in1").value.length!=0&&document.getElementById("in2").value.length!=0){
    document.getElementById("in3").value=box1-box2;
    document.getElementById("op").innerHTML="-";
    }
    else{
        alert("Please Enter Values Properly");
    }

}
function mult()
{
    var box1=parseInt(document.getElementById("in1").value);
    var box2=parseInt(document.getElementById("in2").value);
    console.log(box1);
    if(document.getElementById("in1").value.length!=0&&document.getElementById("in2").value.length!=0){
    document.getElementById("in3").value=box1*box2;
    document.getElementById("op").innerHTML="*";
    }
    else{
        alert("Please Enter Values Properly");
    }

}
function div()
{
    var box1=parseInt(document.getElementById("in1").value);
    var box2=parseInt(document.getElementById("in2").value);
    console.log(box1);
    if(document.getElementById("in1").value.length!=0&&document.getElementById("in2").value.length!=0){
    document.getElementById("in3").value=box1/box2;
    document.getElementById("op").innerHTML="/";
    }
    else{
        alert("Please Enter Values Properly");
    }

}

