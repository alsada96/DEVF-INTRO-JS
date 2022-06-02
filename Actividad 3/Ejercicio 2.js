//Juego de piedra, papel o tijeras

let Jugador1 = prompt("Elige: piedra, papel o tijera")
let Jugador2 = prompt("Elige: piedra, papel o tijera")

if (Jugador1 == "piedra" && Jugador2 == "piedra") {
    alert("Empate");
} else if (Jugador1 == "piedra" && Jugador2 == "papel") {
    alert("El ganador es Jugador2");
} else if (Jugador1 == "piedra" && Jugador2 == "tijera") {
    alert("El ganador es Jugador1");
} else if (Jugador1 == "papel" && Jugador2 == "piedra") {
    alert("El ganador es Jugador1");
} else if (Jugador1 == "papel" && Jugador2 == "papel") {
    alert("Empate");
} else if (Jugador1 == "papel" && Jugador2 == "tijera") {
    alert("El ganador es Jugador2");
} else if (Jugador1 == "tijera" && Jugador2 == "piedra") {
    alert("El ganador es Jugador2");
} else if (Jugador1 == "tijera" && Jugador2 == "papel") {
    alert("El ganador es Jugador1");
} else if (Jugador1 == "tijera" && Jugador2 == "tijera") {
    alert("Empate");
} else {
    alert("Elije de nuevo por favor!"); 
}