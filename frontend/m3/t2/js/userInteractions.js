
import { validateEmail, validatePhone } from './utils.js';
import { initializeDOM } from './domManipulation.js';

export function setupUserInteractions() {
    try {
        let nombre = prompt("Ingresa tu nombre:");
        let email = prompt("Ingresa tu email (debe incluir @):");
        let telefono = prompt("Ingresa tu teléfono (solo 9 dígitos numéricos):");

        // Validación para asegurar que el email y el teléfono cumplan los requisitos
        let isEmailValid = validateEmail(email);
        let isPhoneValid = validatePhone(telefono);

        while (!isEmailValid || !isPhoneValid) {
            if (!isEmailValid) {
                email = prompt("Email inválido. Ingresa un email que contenga '@':");
                isEmailValid = validateEmail(email);
            }
            if (!isPhoneValid) {
                telefono = prompt("Teléfono inválido. Ingresa un teléfono de 9 dígitos numéricos:");
                isPhoneValid = validatePhone(telefono);
            }
        }

        alert(`Hola ${nombre}, tus datos se han recibido.`);

        // Llamar a initializeDOM con los datos finales y sus validaciones
        initializeDOM(nombre, email, telefono, isEmailValid, isPhoneValid);

    } catch (error) {
        console.error("Ocurrió un error al procesar los datos del usuario:", error);
        const serviceContainer = document.getElementById("serviceContainer");
        serviceContainer.innerHTML = "<p class='error'>⚠️ Ocurrió un error al procesar tus datos. Por favor, inténtalo de nuevo.</p>";
    }
}


export const doctores = [
    { nombre: "Dr. Juan Pérez", especialidad: "Cardiología", experiencia: 10 },
    { nombre: "Dra. Ana García", especialidad: "Dermatología", experiencia: 3 },
    { nombre: "Dr. Carlos Fernández", especialidad: "Neurología", experiencia: 8 },
    { nombre: "Dra. Sofía López", especialidad: "Pediatría", experiencia: 2 },
];
