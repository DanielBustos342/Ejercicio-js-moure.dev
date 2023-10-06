/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */
let numero = 7;

function esPar(numero) {
    return numero % 2 === 0;
}

function esFibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === 0 || numero === 1) {
        return true;
    }

    for (let i = 0; b < numero; i++) {
        let aux = a + b;
        a = b;
        b = aux;

        if (b === numero) { 
            return true;
        }
    }
    return false;
}

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function respuesta(numero) {
    let resultado = `${numero}`;

    resultado += `${esPrimo(numero) ? ' es primo, ' : ' no es primo, '}`;
    resultado += `${esFibonacci(numero) ? 'es fibonacci, ' : 'no es fibonacci, '}`;
    resultado += `${esPar(numero) ? 'y es par' : 'y es impar'}`;

    return resultado;
}

console.log(respuesta(numero));
// console.log(esPar(numero));
// console.log(esFibonacci(numero));
// console.log(esPrimo(numero));