import { setupUserInteractions } from './userInteractions.js';
import { initializeDOM, mostrarDoctores } from './domManipulation.js';


console.log("Iniciando el sitio web del hospital.");

document.addEventListener("DOMContentLoaded", function() {
    setupUserInteractions();

    // Mostrar doctores inicialmente
    mostrarDoctores();

    // Escuchar cambios en el filtro de experiencia
    const filtroExperiencia = document.getElementById("filtroExperiencia");
    filtroExperiencia.addEventListener("change", (event) => {
        const experienciaMinima = parseInt(event.target.value, 10);
        mostrarDoctores(experienciaMinima);
    });
});
