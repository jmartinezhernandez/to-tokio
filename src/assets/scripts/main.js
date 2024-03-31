/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const button = document.getElementById("button");
    const food = ["Sushi", "Ramen", "Tempura", "Okonomiyaki", "Tonkatsu"];

    function aleatoryFood() {
        var dish = food[Math.floor(Math.random() * food.length)];

        // Crear un nuevo elemento para mostrar la recomendación
        var recommendationDiv = document.createElement("div");
        recommendationDiv.id = "recommendation";
        recommendationDiv.style.visibility = "visible";
        recommendationDiv.innerHTML = "<h3>Te recomendamos como plato estrella:</h3>" +
                                      "<p>" + dish + "</p>";

        // Buscar si ya hay una recomendación anterior y eliminarla
        var previousRecommendation = document.getElementById("recommendation");
        if (previousRecommendation) {
            previousRecommendation.remove();
        }

        // Agregar el nuevo elemento justo antes del footer
        var footer = document.querySelector("footer");
        footer.parentNode.insertBefore(recommendationDiv, footer);
    }

    // Evento click
    button.addEventListener("click", aleatoryFood);