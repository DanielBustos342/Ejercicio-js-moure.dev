// Enunciado
    /*
    * Escribe un programa que muestre por consola (con un print) los
    * números de 1 a 100 (ambos incluidos y con un salto de línea entre
    * cada impresión), sustituyendo los siguientes:
    * - Múltiplos de 3 por la palabra "fizz".
    * - Múltiplos de 5 por la palabra "buzz".
    * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
    */

    function fizz_buzz(numero){
        arrayNumeros = [];

        for (let i = 1; i <= numero; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                arrayNumeros.push('fizz buzz')
            }else if (i % 3 === 0) {
                arrayNumeros.push('fizz');
            } else if (i % 5 === 0){
                arrayNumeros.push('buzz');
            }else{
                arrayNumeros.push(i);
            }
        }
        return arrayNumeros;
    }

console.log(fizz_buzz(100))