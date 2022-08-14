var list=document.getElementById("list");

function add(){
    var box=document.getElementById("box");
  
if(box.value.length===0){
    alert("Invalid! Please Enter TODO");
}else{
     var box=document.getElementById("box");
     var li=document.createElement('li');
     li.setAttribute("class","itm");
     var value=document.createTextNode(box.value);
     li.appendChild(value);
     


 var DT=document.createElement("i");
     DT.setAttribute("class","fa-solid fa-trash-can");
     DT.setAttribute("onclick","deleted(this)");
 li.appendChild(DT);
 var i=document.createElement("i");
     i.setAttribute("class","fa-solid fa-pen-to-square");
     i.setAttribute("onclick","edited(this)");
 li.appendChild(i);

//  var c=document.createElement(button);
//  dlt=document.createTextNode(DELETE);
//  c.appendChild(dlt);
//  li.appendChild(c);
  
     list.appendChild(li);
     box.value="";
}
    
     
}

function dltall(){
   
list.innerHTML=" ";


}
function deleted(g){
console.log(g);
g.parentNode.remove();

}


function edited(e){
    var c= e.parentNode.firstChild.nodeValue;
var b=prompt(" Enter Updated Todo",c);
e.parentNode.firstChild.nodeValue=b;

}


