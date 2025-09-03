const titulo = document.getElementById("tituloprincipal");
let estadoOriginal = true;



console.log(titulo);
titulo.addEventListener("click", () => {
if(estadoOriginal=== true){
    titulo.innerText = "de pagina web";
    titulo.style.color = "green";

}
 
else {
    titulo.innerText = "Un nuevo titulo";
    titulo.style.color = "red";
}

estadoOriginal = !estadoOriginal;

});