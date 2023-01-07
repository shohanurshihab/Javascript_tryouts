var newlist=document.createElement("li");
var ul1=document.getElementsByTagName("ul")[0];
ul1.appendChild(newlist);
var newlink=document.createElement("a");
newlink.href="https://www.google.com";
newlink.target="_blank"
newlink.innerHTML="SEARCH";
newlist.appendChild(newlink);

ul1.setAttribute("style","color:red;")
var bodytag=document.getElementsByTagName("body")[0];
bodytag.style.backgroundColor="black";
ul1.style.boxShadow="5px 5px 5px blue"

var li3=document.getElementsByTagName("ul")[0].getElementsByTagName("li")[3];
ul1.removeChild(li3);


