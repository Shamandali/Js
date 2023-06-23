// SEMAFORO con letras

// const semaforo = ['verde','amarillo','roja'];
// const semSpan = document.querySelector('#value');

// let cont = 0;
// setInterval(sem,3500);
// function sem(){
//     semSpan.innerHTML = semaforo[cont % semaforo.length]
//     cont++
// }

// SEMAFORO CON IMAGENES

var colores = ['verde','amarillo','rojo'];
const semaforoImg = document.querySelector('#semaforo-img')
function Luz() {
    var color = colores.pop()
    console.log(color)
    if (!colores.length)
      colores = ['amarillo','verde','rojo']
    semaforoImg.src = "Assests/"+color+".png"
    return color
  }
  
  const intervalID = setInterval(Luz, 1500)
