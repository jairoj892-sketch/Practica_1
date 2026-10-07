console.log("JavaScript conectado correctamente");

const boton = document.getElementById("cambiarColor");

boton.addEventListener("click", function() {
    const divs = document.querySelectorAll(".contenedor div");

    divs.forEach(function(div) {
        div.style.backgroundColor = "#e74c3c";
    });
});
