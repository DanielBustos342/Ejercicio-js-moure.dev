/*
 * Crea un programa que simule el comportamiento del sombrero seleccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
 */
const readlinePromises = require('node:readline/promises');

class CrearPregunta {
    constructor(pregunta, respuesta) {
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }
}

const seleccionDeCasa = async (rl) => {

    const preguntas =   [new CrearPregunta("¿Cómo te definirías?", [
        ["1. Valiente", "gryffindor"],
        ["2. Leal", "hufflepuff"],
        ["3. Sabio", "ravenclaw"],
        ["4. Ambicioso", "slytherin"]]),
    new CrearPregunta("¿Cuál es tu clase favorita?", [
        ["1. Vuelo", "gryffindor"],
        ["2. Pociones", "ravenclaw"],
        ["3. Defensa contra las artes oscuras", "slytherin"],
        ["4. Animales fantásticos", "hufflepuff"]]),
    new CrearPregunta("¿Dónde pasarías más tiempo?", [
        ["1. Invernadero", "hufflepuff"],
        ["2. Biblioteca", "ravenclaw"],
        ["3. En la sala común", "slytherin"],
        ["4. Explorando", "gryffindor"]]),
    new CrearPregunta("¿Cuál es tu color favorito?", [
        ["1. Rojo", "gryffindor"],
        ["2. Azul", "ravenclaw"],
        ["3. Verde", "slytherin"],
        ["4. Amarillo", "hufflepuff"]]),
    new CrearPregunta("¿Cuál es tu mascota?", [
        ["1. Sapo", "ravenclaw"],
        ["2. Lechuza", "gryffindor"],
        ["3. Gato", "hufflepuff"],
        ["4. Serpiente", "slytherin"]])
    ];


    const casas = {
        "gryffindor": 0,
        "hufflepuff": 0,
        "ravenclaw": 0,
        "slytherin": 0
    };

    for (const pregunta of preguntas) {
        let respuesta = '';

        do {
            respuesta = await rl.question(`${pregunta.pregunta}\n${pregunta.respuesta.map(([option, _]) => option).join("\n")}\n`);
            respuesta = parseInt(respuesta);

        } while (![1, 2, 3, 4].includes(respuesta));

        for (let i = 0; i < pregunta.respuesta.length; i++) {
            if (i + 1 === respuesta) {
                casas[pregunta.respuesta[i][1]] += 1;
            }
        }
    }

    const casa = Math.max(...Object.values(casas));
    const casaSeleccionada = Object.entries(casas).find(elements => elements[1] == casa)[0];

    console.log(`\n${'#'.repeat(20)} ${casaSeleccionada} ${'#'.repeat(20)}`);
    console.log("¡La selección ha terminado!");

    rl.close();
}

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

seleccionDeCasa(rl);
   
