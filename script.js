

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
llista.push(el);

localStorage.setItem("llista", JSON.stringify(llista));
typeof(el);
llistar(llista);
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

    var container = document.getElementById("llista1");
container.insertBefore(el, container.firstChild);
}

function llistar(llista){

    


for(var i=0;i<llista.length;i++){
    if(isElement(llista[i])==true){
      
    document.getElementById("llista1").appendChild(llista[i]);
    }
  

   
}



}

function Esborrar(){

 var llista = JSON.parse(localStorage.getItem("llista"));
 llista.length=0;
var ol=document.getElementById("llista1");
 while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
}

 llistar(llista);
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


  
 