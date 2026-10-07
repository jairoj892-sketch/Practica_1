
const boton = document.getElementById("cambiarColor");

boton.addEventListener("click", function() {
    const divs = document.querySelectorAll(".contenedor div");

    divs.forEach(function(div) {
        if (div.style.backgroundColor === "rgb(231, 76, 60)") {
            div.style.backgroundColor = "#3498db";
        } else {
            div.style.backgroundColor = "#e74c3c";
        }
    });
});
