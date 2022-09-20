// let jugar;
// let opciones;
// jugar = +prompt("¿Cuantas quiere jugar?");

// for (let i = 0; i < jugar; i++) {
//   let pc = Math.floor(Math.random() * 3 + 1);
//   opciones = prompt("elige el numero: 1.pidra, 2.papel, 3.tijeras");
//   if (opciones == pc) {
//     alert("empataron");
//   } else if (opciones > pc) {
//     alert("el usuario gano");
//   } else if (opciones < pc) {
//     alert("el pc gano");
//   }
// }
let opcion, veces, jugador, pc;

function eleccionpc() {
  pc = Math.floor(Math.random() * 3 + 1);
}

let cantidad = function () {
  let juego = +prompt("ingrese cuantas veces quiere jugar");
  return juego;
};

jugador = cantidad();

for (let i = 0; i < jugador; i++) {
  eleccionpc();
  opcion = +prompt("elije una obcion: 1.piedra, 2.papel o 3.tijera");
  if (opcion == pc) {
    alert("empataron");
  } else if (opcion > pc) {
    alert("el usuario gano");
  } else if (opcion < pc) {
    alert("el pc gano");
  }
}
