

function afegir(){
   
    
    var element=prompt("quin element vols afegir?");
    //var ol=document.getElementById("llista1");
    var el=document.createElement("li");

    var img=document.createElement("img");
    img.src="list-add.svg";
    
    img.className="js-afegeix-item interaccio";

        
     
    
    var node=document.createTextNode(element);
   
    var img2=document.createElement("img");
    img2.src="list-remove.svg";
    img2.className="js-afegeix-item interaccio";
   
    el.appendChild(node);
    el.appendChild(img);
    el.appendChild(img2); 
    
    /*ol.appendChild(el);*/
    
   

//...
 var llista = JSON.parse(localStorage.getItem("llista"));
if(llista==null){
    llista=[];
}
llista.push(el.innerHTML);

localStorage.setItem("llista", JSON.stringify(llista));

if(llista.length!=1){
insertAfter(el, document.getElementById("llista1").lastChild);
}else{
    document.getElementById("llista1").insertBefore(el, document.getElementById("llista1").firstChild);
    
}
}

function Inici(){
    var element=prompt("quin element vols afegir?");
    //var ol=document.getElementById("llista1");
    var el=document.createElement("li");

    var img=document.createElement("img");
    img.src="list-add.svg";
    
    img.className="js-afegeix-item interaccio";

        
     
    
    var node=document.createTextNode(element);
   
    var img2=document.createElement("img");
    img2.src="list-remove.svg";
    img2.className="js-afegeix-item interaccio";
   
    el.appendChild(node);
    el.appendChild(img);
    el.appendChild(img2); 

    var llista = JSON.parse(localStorage.getItem("llista"));
    if(llista==null){
        llista=[];
    }
    llista.push(el.innerHTML);
    
    localStorage.setItem("llista", JSON.stringify(llista));

    var container = document.getElementById("llista1");
container.insertBefore(el, container.firstChild);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

window.onload= function llistar(){

    
    var llista = JSON.parse(localStorage.getItem("llista"));

for(var i=0;i<llista.length;i++){
    //document.getElementById("llista1");
   
        var li=document.createElement("li");
        li.innerHTML=llista[i];
        li.id=i;
      
    document.getElementById("llista1").appendChild(li);
    
  

   
}



}

function Esborrar(){

 var llista = JSON.parse(localStorage.getItem("llista"));
 llista.length=0;
var ol=document.getElementById("llista1");
localStorage.removeItem("llista");
 while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
}

 
}

function isElement(element) {
    // works on major browsers back to IE7
    return element instanceof Element;  
  }

  function tipusOL(){
      var ol=document.getElementById("llista1");
      var sel=document.getElementById("tipus-ol").value;
      ol.type=sel;
  }

  $( "input.js-canvia-tipus-llista" ).click(function() {
      if(document.getElementById("llista1").tagName=="OL"){
    $( "#llista1" ).replaceWith( '<ul id="llista1"> ' + $( "#llista1" ).html() + '</ul>' );
        document.getElementsByClassName("js-canvia-tipus-llista")[0].value="Canvia a llista ordenada";
    
      }else{
        $( "#llista1" ).replaceWith( '<ol id="llista1"> ' + $( "#llista1" ).html() + '</ol>' );
        document.getElementsByClassName("js-canvia-tipus-llista")[0].value="Canvia a llista no ordenada";
      }
        
  });

  var lis=document.getElementsByTagName("li");
  if(lis!=null){
  for(var i=0;i<lis.size;i++){
      lis[i].id=i;
      lis[i].firstChild.addEventListener("click",afegirSota(this.parentNode.id));
  }
};


function afegirSota(id){

    $("#"+id+"").after("<li>Nou</li>");
}

  
 