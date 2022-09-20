let jugar;
let opciones;
jugar = +prompt("¿Cuantas quiere jugar?");

for (let i = 0; i < jugar; i++) {
  let pc = Math.floor(Math.random() * 3 + 1);
  opciones = prompt("elige el numero: 1.pidra, 2.papel, 3.tijeras");
  if (opciones == pc) {
    alert("empataron");
  } else if (opciones > pc) {
    alert("el usuario gano");
  } else if (opciones < pc) {
    alert("el pc gano");
  }
}
