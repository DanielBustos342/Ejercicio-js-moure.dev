/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */
const carateres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"·$%&/()=?';

function generarPass(longitudMin, longitudMax) {
    const longitud = Math.floor(Math.random() * (longitudMax - longitudMin + 1)) + longitudMin;
    let pass = '';

    for (let i = 0; i < longitud; i++) {
        pass += carateres.charAt(Math.floor(Math.random() * carateres.length));
    }
    return pass;
}

console.log(generarPass(8,16));