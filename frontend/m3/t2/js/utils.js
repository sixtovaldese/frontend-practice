export function validateEmail(email) {
    // Valida que el email contenga al menos un "@" para considerarlo válido
    return email.includes("@");
}

export function validatePhone(phone) {
    // Valida que el teléfono tenga exactamente 9 dígitos y solo números
    return /^\d{9}$/.test(phone);
}
