var coll = document.getElementById("franja");
var nom= document.getElementById("titulo");
var cont= document.getElementById("contenido");

coll.addEventListener("click", abrir);


function abrir(){
if (cont.style.display === "none"){
          cont.style.display = "block";
    
        nom.innerHTML = "Contenidos ▲";

}else {
      cont.style.display = "none";
    
    nom.innerHTML = "Contenidos ▼";
    }
    
    
}




