/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */

// Generadores de números aleatorios criptográficamente seguros (CSPRNG): 
// Para aplicaciones que requieren una alta calidad de aleatoriedad y seguridad, 
// JavaScript proporciona el objeto crypto que incluye métodos para generar números 
// aleatorios criptográficamente seguros.

// Aquí hay un ejemplo de cómo generar un número entero aleatorio entre 1 y 100 utilizando
// crypto:
const crypto = require('crypto');

const randomBytes = crypto.randomBytes(4); // 4 bytes de datos aleatorios
const randomInt = Math.abs(randomBytes.readUInt32LE()) % 100 + 1;

console.log(randomInt);