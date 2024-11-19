import { doctores } from './userInteractions.js';

export function initializeDOM(userName, email, phone, isEmailValid, isPhoneValid) {
    const serviceContainer = document.getElementById("serviceContainer");
    serviceContainer.innerHTML = ""; // Limpiar contenido previo

    try {
        // Mensajes de depuración
        console.log("Inicializando DOM con los siguientes datos:");
        console.log("Nombre:", userName);
        console.log("Email:", email);
        console.log("Teléfono:", phone);
        console.log("Email válido:", isEmailValid);
        console.log("Teléfono válido:", isPhoneValid);

        // Crear contenedor centrado para los datos del usuario
        const userData = document.createElement("div");
        userData.classList.add("user-data");

        const greeting = document.createElement("div");
        greeting.classList.add("greeting");
        greeting.innerHTML = `<h2>Bienvenido, ${userName || "Visitante"}.</h2>`;
        userData.appendChild(greeting);

        if (isEmailValid) {
            const emailElement = document.createElement("p");
            emailElement.classList.add("user-info");
            emailElement.textContent = `Email: ${email}`;
            userData.appendChild(emailElement);
        } else {
            const emailError = document.createElement("p");
            emailError.classList.add("error");
            emailError.textContent = "⚠️ El email ingresado no es válido. Debe contener '@'.";
            userData.appendChild(emailError);
        }

        if (isPhoneValid) {
            const phoneElement = document.createElement("p");
            phoneElement.classList.add("user-info");
            phoneElement.textContent = `Teléfono: ${phone}`;
            userData.appendChild(phoneElement);
        } else {
            const phoneError = document.createElement("p");
            phoneError.classList.add("error");
            phoneError.textContent = "⚠️ El número de teléfono debe contener exactamente 9 dígitos numéricos.";
            userData.appendChild(phoneError);
        }

        serviceContainer.appendChild(userData);

        const newsCard = document.createElement("div");
        newsCard.classList.add("card");
        newsCard.innerHTML = `
            <i class="fas fa-newspaper servicio__icon"></i>
            <h3 class="servicio__title">Última Noticia: Nueva Área de Pediatría</h3>
            <p>Hemos inaugurado una nueva área especializada en pediatría para atender mejor a nuestros pacientes más pequeños.</p>
        `;
        serviceContainer.appendChild(newsCard);

        console.log("Se agregó el saludo personalizado y los datos del usuario al DOM.");

    } catch (error) {
        console.error("Ocurrió un error al procesar los datos del usuario:", error);
        const errorElement = document.createElement("p");
        errorElement.classList.add("error");
        errorElement.textContent = "⚠️ Error al procesar los datos. Por favor, inténtalo de nuevo.";
        serviceContainer.appendChild(errorElement);
    }
}

export function mostrarDoctores(filtroExperiencia = 0) {
    const doctorContainer = document.getElementById("doctorContainer");
    doctorContainer.innerHTML = ""; // Limpiar contenido previo

    try {
        console.log(`Mostrando doctores con más de ${filtroExperiencia} años de experiencia`);

        const doctorsTitle = document.createElement("h2");
        doctorsTitle.classList.add("doctors-title");
        doctorsTitle.textContent = "Nuestro Equipo Médico";
        doctorContainer.appendChild(doctorsTitle);

        doctores.forEach(doctor => {
            if (doctor.experiencia >= filtroExperiencia) {
                console.log(`Mostrando doctor: ${doctor.nombre} (${doctor.experiencia} años de experiencia)`);

                const doctorElement = document.createElement("div");
                doctorElement.classList.add("doctor-card");
                doctorElement.innerHTML = `
                    <h3>${doctor.nombre}</h3>
                    <p>Especialidad: ${doctor.especialidad}</p>
                    <p>Experiencia: ${doctor.experiencia} años</p>
                `;
                doctorContainer.appendChild(doctorElement);
            }
        });

        console.log(`Doctores con más de ${filtroExperiencia} años de experiencia agregados al DOM.`);

    } catch (error) {
        console.error("Error al mostrar la lista de doctores:", error);
        const errorElement = document.createElement("p");
        errorElement.classList.add("error");
        errorElement.textContent = "⚠️ No se pudo cargar la lista de doctores. Inténtalo nuevamente.";
        doctorContainer.appendChild(errorElement);
    }
}
