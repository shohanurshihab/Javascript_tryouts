var docs=document.getElementById("doks");
var btn=document.getElementById("show");
console.log(docs.className);
btn.onclick=function ()
{
if(docs.className=="para")
{
    docs.className="para open";
    btn.innerHTML="Show Less";
}
else
{
    docs.className="para";
    btn.innerHTML="Show More"
}

}



