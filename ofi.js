var coll = document.getElementById("franja");
var nom = document.getElementById("titulo");
var cont = document.getElementById("contenido");

coll.addEventListener("click", abrir);


function abrir() {
    if (cont.style.display === "none") {
        cont.style.display = "block";

        nom.innerHTML = "Contenidos ▲";

    } else {
        cont.style.display = "none";

        nom.innerHTML = "Contenidos ▼";
    }


}


var menutitle = document.getElementById("menu");
var langtitle = document.getElementById("lang");
var menucont = document.getElementById("menucont");
var langcont = document.getElementById("langcont");

menutitle.addEventListener("click", menu);

function menu() {
    if (menucont.style.display === "none") {
        menucont.style.display = "block";
         langcont.style.display = "none";

        langtitle.innerHTML = "Cast ▼";
        menutitle.innerHTML = "Menu ▲";
    } else {
        menucont.style.display = "none";

        menutitle.innerHTML = "Menu ▼";
    }
    
}

langtitle.addEventListener("click", lang);

function lang() {
    if (langcont.style.display === "none") {
        langcont.style.display = "block";
        langtitle.innerHTML = "Cast ▲"
           menucont.style.display = "none";

        menutitle.innerHTML = "Menu ▼";
    } else {
        langcont.style.display = "none";

        langtitle.innerHTML = "Cast ▼";
    }
}
