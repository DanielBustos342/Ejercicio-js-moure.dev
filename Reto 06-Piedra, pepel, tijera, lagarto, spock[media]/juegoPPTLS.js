/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */
const reglasDeJuego = {
    "✂️": ["📄", "🦎"],
    "📄": ["🗿", "🖖"],
    "🗿": ["🦎", "✂️"],
    "🦎": ["🖖", "📄"],
    "🖖": ["✂️", "🗿"],
};

function jugar(partidas) {
    let jugador1 = 0;
    let jugador2 = 0;

    for (const partida of partidas) {
        
        let manoJugador1 = partida[0];
        let manoJugador2 = partida[1];

        if (manoJugador1 === manoJugador2) {
            continue;
        }
        if (reglasDeJuego[manoJugador1].includes(manoJugador2)) {
            jugador1++;
        }else{
            jugador2++
        }
    }
    return (jugador1 === jugador2) ? 'Empate' : (jugador1 > jugador2) ? 'Gana Jugador 1' : 'Gana Jugador 2';
}

console.log('Partida 1: ' + jugar([["🗿", "✂️"]]));
console.log('Partida 2: ' + jugar([["🗿", "🗿"]]));
console.log('Partida 3: ' + jugar([["✂️", "🗿"]]));
console.log('Partida 4: ' + jugar([["🗿","✂️"], ["✂️","🗿"], ["📄","✂️"]]));
console.log('Partida 5: ' + jugar([["🗿", "🗿"], ["🗿", "🗿"], ["🗿", "🗿"], ["🗿", "🗿"]]));
console.log('Partida 6: ' + jugar([["🖖", "🗿"], ["✂️", "📄"], ["🗿", "🗿"], ["🦎", "🖖"]]));
console.log('Partida 7: ' + jugar([["🗿","✂️"], ["✂️","🗿"],["📄","✂️"]]));
console.log('Partida 8: ' + jugar([["🗿","🖖"],["✂️","🗿"]]));
console.log('Partida 9: ' + jugar([["🦎","🖖"], ["✂️","🦎"], ["📄","🗿"]]))
console.log('Partida 10: ' + jugar([["✂️","🦎"], ["📄","🗿"]]))