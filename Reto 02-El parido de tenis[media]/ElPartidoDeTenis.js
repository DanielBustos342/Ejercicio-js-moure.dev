/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */
const secuencia = ['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1'];

const puntos = {
    0: 'love',
    1: '15',
    2: '30',
    3: '40',
    4: 'Deuce',
    5: 'Ventaja',
    6: 'Ganador'
}

let puntosPlayer = {
    P1: 0,
    P2: 0
}

let resultado = '';



function gameTenis(secuencia) {
    
    for (let i = 0; i < secuencia.length; i++) {
        
        const player = secuencia[i].toUpperCase();// combierto el arreglo a mayuscula

        if (player === 'P1') {
            puntosPlayer.P1++;
        } else if (player === 'P2') {
            puntosPlayer.P2++
        } else if(player !== 'P1' && player !== 'P2'){
            resultado = 'Error al ingresar los datos del jugador'
            break;
        } 
        //Dauce (si hay empate)
        if (puntosPlayer.P1 === puntosPlayer.P2 && puntosPlayer.P1 >= 3) {
            puntosPlayer.P1 = 4;
            puntosPlayer.P2 = 4;
            resultado += puntos[4] + '\n'; 
        //Ventaja (si hay ventaja para uno de los dos)
        } else if (puntosPlayer.P1 === 5 || puntosPlayer.P2 === 5) {
            if (puntosPlayer.P1 > puntosPlayer.P2) {
                resultado += puntos[5] + ' player P1 \n';
            }else{
                resultado += puntos[5] + ' player P2 \n';
            }

        //ganador (si hay un ganador)
        }else if (puntosPlayer.P1 === 6 || puntosPlayer.P2 === 6) {
            if (puntosPlayer.P1 > puntosPlayer.P2) {
                resultado += puntos[6] + ' player P1 \n';
            }else{
                resultado += puntos[6] + ' player P2 \n';
            }
        
        //Genera error si ya termino el partido y hay un ganador
        if (i < secuencia.length - 1) {
            resultado = 'Error el juego ya finalizo';
            break;
        }
        // muestra puntos hasta terminar el for
        } else{
            resultado += 'P1: ' + puntos[puntosPlayer.P1] + ' ----- P2: ' + puntos[puntosPlayer.P2] + '\n';
        }
    }
    return resultado;
}
console.log(gameTenis(secuencia));