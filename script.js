const boton = document.getElementById("botonAbrir");
const inicio = document.getElementById("inicio");
const jardin = document.getElementById("jardin");

boton.addEventListener("click", function () {

    // Ocultamos la pantalla inicial
    inicio.style.display = "none";

    // Mostramos el jardín
    jardin.style.display = "block";

    // Creamos pequeños corazones/brillos
    crearParticulas();

});


function crearParticulas() {

    for (let i = 0; i < 25; i++) {

        const particula = document.createElement("div");

        particula.innerHTML = Math.random() > 0.5 ? "✨" : "💛";

        particula.style.position = "absolute";

        particula.style.left = Math.random() * 100 + "%";

        particula.style.bottom = "-30px";

        particula.style.fontSize =
            (12 + Math.random() * 18) + "px";

        particula.style.zIndex = "10";

        particula.style.animation =
            `subir ${4 + Math.random() * 5}s linear forwards`;

        particula.style.animationDelay =
            Math.random() * 2 + "s";

        jardin.appendChild(particula);

    }

}


/* Animación de las partículas */

const estilo = document.createElement("style");

estilo.innerHTML = `

@keyframes subir {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;
    }

}

`;

document.head.appendChild(estilo);