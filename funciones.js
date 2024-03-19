var i = 0; j = 0;
var tokens = "", paso = 0 , turno = false, fin = false;
var texto = "", tiempo = 1000;
function reglas() {
  alert(`Notación de piezas:

    Rey: K
    Reina: Q
    Torre: R
    Alfil: B
    Caballo: N
    Peón: no se indica ninguna letra (por ejemplo, e4)
    Notación de columnas:
    
    Las columnas se indican con letras de la "a" a la "h". La columna más a la izquierda es la "a" y la columna más a la derecha es la "h".
    Notación de filas:
    
    Las filas se indican con números del 1 al 8. El lado de las blancas está en las filas 1 y 2, mientras que el lado de las negras está en las filas 7 y 8.
    Notación de movimientos:
    
    Se utiliza la notación abreviada de la pieza seguida de la casilla a la que se mueve. Por ejemplo, Re4 significa que el Rey se mueve a la casilla e4.
    Capturas:
    
    Cuando una pieza captura a otra, se utiliza "x" para indicar la captura. Por ejemplo, Bxe4 significa que el Alfil captura en la casilla e4.
    Enroque:
    
    El enroque corto se indica con O-O y el enroque largo se indica con O-O-O.
    Peones:
    
    Cuando un peón avanza sin capturar, solo se indica la casilla de destino. Por ejemplo, e4 significa que el peón se mueve a e4.
    Promoción de peones:
    
    Cuando un peón alcanza la octava fila, se promociona a otra pieza (generalmente una reina). La promoción se indica agregando la letra de la pieza deseada después del movimiento del peón. Por ejemplo, e8=Q significa que el peón en e8 se promociona a una reina.
    Jaque:
    
    Se indica con el símbolo "+" al final del movimiento. Por ejemplo, Nf7+ significa que el Caballo ha dado jaque.
    Jaque mate:
    
    Se indica con el símbolo "#" al final del movimiento. Por ejemplo, Qh8# significa que la Reina ha dado jaque mate.`);
}
function iniciar() {
  var celdas = document.getElementById("Tablero");
  for(i = 0; i < 8; i++){
    celdas.rows[2].cells[i].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
    celdas.rows[7].cells[i].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  }

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";
  celdas.rows[8].cells[5].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[5].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";

  celdas.rows[8].cells[0].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[0].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[0].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[0].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";
  celdas.rows[8].cells[6].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[6].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[4].style =
    "background-image: url(./img/ReyB.png); background-size:cover;";
    celdas.rows[1].cells[4].style =
    "background-image: url(./img/ReyN.png); background-size:cover;";

  celdas.rows[8].cells[3].style =
    "background-image: url(./img/ReinaB.png); background-size:cover;";
  celdas.rows[1].cells[3].style =
    "background-image: url(./img/ReinaN.png); background-size:cover;";

  for(var i = 0; i < 8; i++){
    for(var j = 3; j < 7; j++){
      celdas.rows[j].cells[i].style = "background-image: none";
    }
  }
}

function partidas() {
  var valor = document.getElementById("Combo").value;
  var scanner = new FileReader();

  switch (valor) {
    case "0":
      document.getElementById("texto").value = "";
      break;
    case "1":
      //partida1
      var archivo = "./files/partida1.txt";
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("texto").value = this.responseText;
          removernumero();
          getTokens();
          document.getElementById("turno").innerHTML = "Turno de las blancas";
          console.log(this.responseText);
      }
    };
      
      xhttp.open("GET", archivo, true);
      xhttp.send();
      break;
    case "2":
      //partida2
      var archivo = "./files/partida2.txt";
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("texto").value = this.responseText;
          removernumero();
          getTokens();
          document.getElementById("turno").innerHTML = "Turno de las blancas";
          console.log(this.responseText);
      }
    };
      
      xhttp.open("GET", archivo, true);
      xhttp.send();
      break;
    case "3":
      var archivo = "./files/partida3.txt";
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("texto").value = this.responseText;
          removernumero();
          getTokens();
          document.getElementById("turno").innerHTML = "Turno de las blancas";
          console.log(this.responseText);
      }
    };
      
      xhttp.open("GET", archivo, true);
      xhttp.send();
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();
  paso = 0;
  fin = false;
  
  scanner.onload = function (e) {
    document.getElementById("texto").value = e.target.result;
    removernumero();
    getTokens();
  };
  scanner.readAsText(archivo);

  document.getElementById("turno").innerHTML = "Turno de las blancas";
  iniciar();
}


function reiniciarTablero() {
  // Reiniciar variables
  i = 0;
  j = 0;
  tokens = "";
  paso = 0;
  turno = false;
  fin = false;
  texto = "";

  // Limpiar el tablero
  var celdas = document.getElementById("Tablero");
  for (var fila = 1; fila <= 8; fila++) {
    for (var columna = 0; columna < 8; columna++) {
      celdas.rows[fila].cells[columna].style.backgroundImage = "none";
      
      iniciar();
      bloquearBotones();
    }
  }

  

  
}
// Bloquea los botones según el modo seleccionado
function bloquearBotones(modo) {
  const pasoAPasoBtn = document.querySelector('.button1');
  const completoBtn = document.querySelector('.button2');
  const reiniciarBtn = document.querySelector('.button3');
  if (modo === 'paso') {
    pasoAPasoBtn.disabled = false;
    completoBtn.disabled = true;
  } else if (modo === 'completo') {
    pasoAPasoBtn.disabled = true;
    completoBtn.disabled = false;
  }  else if (modo === 'reiniciar') {
    pasoAPasoBtn.disabled = false;
    completoBtn.disabled = false;
  }

}















function removernumero() {
  var texto = document.getElementById("texto").value;
  texto = texto.replace(/\d+\.\s*/g, ''); 
  document.getElementById("texto").value = texto;
}

function getTokens() {
  var texto = document.getElementById("texto").value;
  var tokens = texto.split(/\s+/);
}

function pasoApaso() {
  var movimientos = document.getElementById("texto").value.trim().split(/\s+/);
  var tabla = document.getElementById("Tablero");
  var viable = true;
  if(movimientos[0] == ""){
    viable = false;
  }

  if(viable){
    if (paso < movimientos.length) {
      var movimiento = movimientos[paso];
      var pieza = obtenerTipoPieza(movimiento);

      if (turno == false) {
        turno = true;
      } else {
        turno = false;
      }

      var enrq = 1;
      if(movimiento.includes("+")){
        if(movimiento.includes("O-O-O")){
          console.log("enroque largo con jaque"); 
          enrq = 3;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("O-O")){
          console.log("enroque corto con jaque"); 
          enrq = 2;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("=")){
          console.log("jaque con promocion");
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 5);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else{
          console.log("jaque"); 
          var casilla = movimiento.substring(movimiento.length - 3);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
      }
      else if(movimiento.includes("#")){
        if(movimiento.includes("O-O-O")){
          console.log("enroque largo con jaque"); 
          enrq = 3;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("O-O")){
          console.log("enroque corto con jaque"); 
          enrq = 2;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("=")){
          console.log("jaque mate con promocion");
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 5);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else{
          console.log("jaque mate"); 
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 3);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
      }
      else{
        if(movimiento.includes("O-O-O")){
          console.log("enroque largo con jaque"); 
          enrq = 3;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("O-O")){
          console.log("enroque corto con jaque"); 
          enrq = 2;
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else if(movimiento.includes("=")){
          console.log("promocion");
          enrq = 1;
          var casilla = movimiento.substring(movimiento.length - 4);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
        else{
          console.log("normal"); 
          var casilla = movimiento.substring(movimiento.length - 2);
          actualizarTablero(tabla, casilla, pieza, turno ? "B" : "N", enrq, movimiento);
        }
      }

      
      document.getElementById("turno").innerHTML = "Movimiento " + (paso + 1) + ": " +
        " Turno de las " + (turno ? "blancas" : "negras") + ": " + movimiento + " " + pieza;
      
      paso++;
    } else {
      alert("Jaquemate");
      fin = true;
    }
  }
  else{
    alert("No se ha seleccionado una partida");
    fin = true;
  }
}

function pasosCompleto() {
  setTimeout(function() {
    if (!fin) {
        pasoApaso();
        pasosCompleto();
    }
  }, tiempo);
}

function completoTiempos(){
  tiempo = document.getElementById("Tiempo").value;
}


function actualizarTablero(tabla, casilla, pieza, turno, enrq, movimiento) {
  var columna = convertirLetraNumero(casilla[0].toLowerCase().toString());
  var fila = parseInt(casilla[1]);
  console.log(casilla)
  console.log(columna, fila);

  for(var i = 0; i < 8; i++){
    for(var j = 1; j < 9; j++){
      if ((i + j) % 2 === 0) {
          tabla.rows[j].cells[i].style.backgroundColor = "#f0d9b5"; 
      } else {
          tabla.rows[j].cells[i].style.backgroundColor = "#b58863"; 
      }
    }
  }

  if (enrq == 1) {
    tabla.rows[9 - fila].cells[columna].style.backgroundColor = "#008000"; // Color rojo
    tabla.rows[9 - fila].cells[columna].style.backgroundImage = "url(./img/" + pieza + turno + ".png)"; 
    tabla.rows[9 - fila].cells[columna].style.backgroundSize = "cover"; 

    borrarPieza(tabla, pieza, turno, columna, fila, movimiento);

    if (movimiento.includes("=")) {
        promo = movimiento[3]
        pieza = obtenerTipoPieza(promo);
        tabla.rows[9 - fila].cells[columna].style.backgroundColor = "#008000"; 
        tabla.rows[9 - fila].cells[columna].style.backgroundImage = "url(./img/" + pieza + turno + ".png)"; 
        tabla.rows[9 - fila].cells[columna].style.backgroundSize = "cover"; 
    }
  } else if(enrq == 2){
    if(turno == "B"){
      tabla.rows[8].cells[6].style.backgroundColor = "#008000";
      tabla.rows[8].cells[6].style.backgroundImage = "url(./img/ReyB.png)";
      tabla.rows[8].cells[6].style.backgroundSize = "cover";
      tabla.rows[8].cells[5].style.backgroundColor = "#008000";
      tabla.rows[8].cells[5].style.backgroundImage = "url('./img/TorreB.png')"; 
      tabla.rows[8].cells[5].style.backgroundSize = "cover";
      tabla.rows[8].cells[4].style.backgroundImage = "none";
      tabla.rows[8].cells[7].style.backgroundImage = "none"; 
    } else if (turno == "N"){
      tabla.rows[1].cells[6].style.backgroundColor = "#008000";
      tabla.rows[1].cells[6].style.backgroundImage = "url(./img/ReyN.png)";
      tabla.rows[1].cells[6].style.backgroundSize = "cover";
      tabla.rows[1].cells[5].style.backgroundColor = "#008000";
      tabla.rows[1].cells[5].style.backgroundImage = "url(./img/TorreN.png)"; 
      tabla.rows[1].cells[5].style.backgroundSize = "cover";
      tabla.rows[1].cells[4].style.backgroundImage = "none"; 
      tabla.rows[1].cells[7].style.backgroundImage = "none"; 
    }
  } else if(enrq == 3){
    if(turno == "B"){
      tabla.rows[8].cells[2].style.backgroundColor = "#008000";
      tabla.rows[8].cells[2].style.backgroundImage = "url(./img/ReyB.png)";
      tabla.rows[8].cells[2].style.backgroundSize = "cover";
      tabla.rows[8].cells[3].style.backgroundColor = "#008000";
      tabla.rows[8].cells[3].style.backgroundImage = "url('./img/TorreB.png')+"; 
      tabla.rows[8].cells[3].style.backgroundSize = "cover";
      tabla.rows[8].cells[4].style.backgroundImage = "none"; 
      tabla.rows[8].cells[0].style.backgroundImage = "none"; 
    } else if (turno == "N"){
      tabla.rows[1].cells[2].style.backgroundColor = "#008000";
      tabla.rows[1].cells[2].style.backgroundImage = "url(./img/ReyN.png)";
      tabla.rows[1].cells[2].style.backgroundSize = "cover";
      tabla.rows[1].cells[3].style.backgroundColor = "#008000";
      tabla.rows[1].cells[3].style.backgroundImage = "url(./img/TorreN.png)"; 
      tabla.rows[1].cells[3].style.backgroundSize = "cover";
      tabla.rows[1].cells[4].style.backgroundImage = "none"; 
      tabla.rows[1].cells[0].style.backgroundImage = "none"; 
    }
  }
}



function borrarPieza(tabla, pieza, turno, columna, fila, movimiento) {
  switch(pieza){
    case "Peon":
      rmPeon(tabla, columna, fila, turno, movimiento);
      break;
    case "Caballo":
      rmCaballo(tabla, turno, columna, fila, movimiento);
      break;
    case "Alfil":
      rmAlfil(tabla, turno, columna, fila, movimiento);
      break;
    case "Rey":
      rmRey(tabla, turno, columna, fila);
      break;
    case "Reina":
      rmReina(tabla, turno, columna, fila);
      break;
    case "Torre":
      rmTorre(tabla, turno, columna, fila, movimiento);
      break;
  }
}

function rmPeon(tabla, columna, fila, turno, movimiento){
  if(turno == "B"){
    if(!movimiento.includes("x")){
      if(tabla.rows[10 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonB.png\")"){
        tabla.rows[10 - fila].cells[columna].style.background = "#008000";
        tabla.rows[10 - fila].cells[columna].style.backgroundImage = "none";
      }
      else if(tabla.rows[11 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonB.png\")"){;
        tabla.rows[11 - fila].cells[columna].style.background = "#008000";
        tabla.rows[11 - fila].cells[columna].style.backgroundImage = "none";
      }
    }
    else{
      var origen = convertirLetraNumero(movimiento[0].toLowerCase().toString());
      tabla.rows[10 - fila].cells[origen].style.background = "#008000";
      tabla.rows[10 - fila].cells[origen].style.backgroundImage = "none";
    }
  }
  if(turno == "N"){
    if(!movimiento.includes("x")){
      if(tabla.rows[7 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonN.png\")"){
        tabla.rows[7 - fila].cells[columna].style.background = "#008000";
        tabla.rows[7 - fila].cells[columna].style.backgroundImage = "none";
      }
      else if(tabla.rows[8 - fila].cells[columna].style.backgroundImage == "url(\"./img/PeonN.png\")"){
        tabla.rows[8 - fila].cells[columna].style.background = "#008000";
        tabla.rows[8 - fila].cells[columna].style.backgroundImage = "none";
      }
    }
    else{
      var origen = convertirLetraNumero(movimiento[0].toLowerCase().toString());
      tabla.rows[8 - fila].cells[origen].style.background = "#008000";
      tabla.rows[8 - fila].cells[origen].style.backgroundImage = "none";
    }
  }
}

function rmCaballo(tabla, turno, columna, fila, movimiento) {
  function eliminarCaballoEnPosicion(dx, dy) {
      const x = columna + dx;
      const y = 9 - fila + dy;
      if (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
          const cell = tabla.rows[y].cells[x];
          if (cell.style.backgroundImage === `url("./img/Caballo${turno}.png")`) {
              cell.style.backgroundColor = "#008000";
              cell.style.backgroundImage = "none";
          }
      }
  }

  if (movimiento.includes("x")) {
      eliminarCaballoEnPosicion(1, 2); 
      eliminarCaballoEnPosicion(-1, 2); 
      eliminarCaballoEnPosicion(2, 1); 
      eliminarCaballoEnPosicion(-2, 1); 
      eliminarCaballoEnPosicion(1, -2); 
      eliminarCaballoEnPosicion(-1, -2); 
      eliminarCaballoEnPosicion(2, -1); 
      eliminarCaballoEnPosicion(-2, -1); 
  } else if (movimiento.length >= 5) {
      const origen_columna = convertirLetraNumero(movimiento[1].toLowerCase());
      const origen_fila = parseInt(movimiento[2]);
      tabla.rows[9 - origen_fila].cells[origen_columna].style.background = "#008000";
      tabla.rows[9 - origen_fila].cells[origen_columna].style.backgroundImage = "none";
  } else {
      eliminarCaballoEnPosicion(1, 2);
      eliminarCaballoEnPosicion(-1, 2); 
      eliminarCaballoEnPosicion(2, 1); 
      eliminarCaballoEnPosicion(-2, 1); 
      eliminarCaballoEnPosicion(1, -2); 
      eliminarCaballoEnPosicion(-1, -2); 
      eliminarCaballoEnPosicion(2, -1); 
      eliminarCaballoEnPosicion(-2, -1); 
  }
}


function rmAlfil(tabla, turno, columna, fila, movimiento) {
  function eliminarAlfilEnDireccion(dx, dy) {
    let x = columna + dx;
    let y = 9 - fila + dy;
    while (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
        const cell = tabla.rows[y].cells[x];
        if (cell.style.backgroundImage !== "none") {
            if (cell.style.backgroundImage === `url("./img/Alfil${turno}.png")`) {
                cell.style.background = "#008000";
                cell.style.backgroundImage = "none";
            }
            break;
        }
        x += dx;
        y += dy;
    }
  }

  if (movimiento.includes("x")) {
      eliminarAlfilEnDireccion(1, 1); 
      eliminarAlfilEnDireccion(1, -1); 
      eliminarAlfilEnDireccion(-1, 1); 
      eliminarAlfilEnDireccion(-1, -1); 
  } else if (movimiento.length >= 5) {
      const origen_columna = convertirLetraNumero(movimiento[1].toLowerCase());
      const origen_fila = parseInt(movimiento[2]);
      tabla.rows[9 - origen_fila].cells[origen_columna].style.background = "#008000";
      tabla.rows[9 - origen_fila].cells[origen_columna].style.backgroundImage = "none";
  } else {
      eliminarAlfilEnDireccion(1, 1); 
      eliminarAlfilEnDireccion(1, -1); 
      eliminarAlfilEnDireccion(-1, 1); 
      eliminarAlfilEnDireccion(-1, -1); 
  }
}

function rmRey(tabla, turno, columna, fila) {
  const movimientos = [
      { dx: 0, dy: 1 }, 
      { dx: 0, dy: -1 }, 
      { dx: 1, dy: 0 }, 
      { dx: -1, dy: 0 }, 
      { dx: 1, dy: 1 }, 
      { dx: -1, dy: 1 }, 
      { dx: 1, dy: -1 }, 
      { dx: -1, dy: -1 }, 
  ];

  for (const movimiento of movimientos) {
      const x = columna + movimiento.dx;
      const y = 9 - fila + movimiento.dy;

      if (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
          const cell = tabla.rows[y].cells[x];
          if (cell.style.backgroundImage === `url("./img/Rey${turno}.png")`) {
            cell.style.background = "#008000";
            cell.style.backgroundImage = "none";
          }
      }
  }
}

function rmReina(tabla, turno, columna, fila) {
  function eliminarReinaEnDireccion(dx, dy) {
    let x = columna + dx;
    let y = 9 - fila + dy;
    while (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
        const cell = tabla.rows[y].cells[x];
        console.log("x: " + x, ", y: " + y);
        console.log(cell.style.backgroundImage);
        if (cell.style.backgroundImage !== "none") {
            if (cell.style.backgroundImage === `url("./img/Reina${turno}.png")`) {
              cell.style.background = "#008000";
              cell.style.backgroundImage = "none";
            }
            break;
        }
        x += dx;
        y += dy;
    }
  }

  eliminarReinaEnDireccion(1, 0);
  eliminarReinaEnDireccion(1, 1);
  eliminarReinaEnDireccion(1, -1);
  eliminarReinaEnDireccion(0, 1);
  eliminarReinaEnDireccion(0, -1);
  eliminarReinaEnDireccion(-1, 0);
  eliminarReinaEnDireccion(-1, 1);
  eliminarReinaEnDireccion(-1, -1);
}

function rmTorre(tabla, turno, columna, fila, movimiento) {
  function eliminarTorreEnDireccion(dx, dy) {
      let x = columna + dx;
      let y = 9 - fila + dy;
      while (x >= 0 && x <= 7 && y >= 1 && y <= 8) {
          const cell = tabla.rows[y].cells[x];
          if (cell.style.backgroundImage !== "none") {
              if (cell.style.backgroundImage === `url("./img/Torre${turno}.png")`) {
                cell.style.background = "#008000";
                cell.style.backgroundImage = "none";
              }
              break;
          }
          x += dx;
          y += dy;
      }
  }

  if (movimiento.includes("x")) {
      eliminarTorreEnDireccion(1, 0); 
      eliminarTorreEnDireccion(-1, 0); 
      eliminarTorreEnDireccion(0, 1); 
      eliminarTorreEnDireccion(0, -1); 
  } else if (movimiento.length >= 5) {
      const origen_columna = convertirLetraNumero(movimiento[1].toLowerCase());
      const origen_fila = parseInt(movimiento[2]);
      tabla.rows[9 - origen_fila].cells[origen_columna].style.background = "#008000";
      tabla.rows[9 - origen_fila].cells[origen_columna].style.backgroundImage = "none";
  } else {
      eliminarTorreEnDireccion(1, 0); 
      eliminarTorreEnDireccion(-1, 0); 
      eliminarTorreEnDireccion(0, 1); 
      eliminarTorreEnDireccion(0, -1); 
  }
}

function obtenerTipoPieza(movimiento) {
  if (!tieneMayusculas(movimiento[0])) {
    return "Peon";
  } else if (movimiento.startsWith("N")) {
    return "Caballo";
  } else if (movimiento.startsWith("B")) {
    return "Alfil";
  } else if (movimiento.startsWith("K")) {
    return "Rey";
  } else if (movimiento.startsWith("Q")) {
    return "Reina";
  } else if (movimiento.startsWith("R")) {
    return "Torre";
  } else {
    return "";
  }
}

function tieneMayusculas(cadena) {
  return /[A-Z]/.test(cadena);
}

function convertirLetraNumero(letra) {
  switch (letra) {
    case "a":
      return 0;
      break;

    case "b":
      return 1;
      break;

    case "c":
      return 2;
      break;

    case "d":
      return 3;
      break;

    case "e":
      return 4;
      break;

    case "f":
      return 5;
      break;

    case "g":
      return 6;
      break;

    case "h":
      return 7;
      break;
  }
}