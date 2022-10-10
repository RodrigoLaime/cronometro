let inputs,
  clock,
  alarm,
  hours,
  minutes,
  seconds,
  repeater; /* Declaro todas las variables que necesito */

window.addEventListener("load", () => {
  inputs = Array.from(document.getElementsByClassName("number")); //traer los inputs y convertirlos a array
  clock = document.querySelector(".clock");
  alarm = new Audio("../mp3/goku-canta-piel-de-canela.mp3");
});

function startTimer() {
  //Leer los inputs
  parseTime();
  //actualizar la vista
  setTimer();
  //Arrancar el timer
  countdown();
}

/* actualizar la ventana o pantalla con los valores actualizados */
function setTimer() {
  clock.innerHTML = `<p class="number">${
    hours > 9 ? hours : "0" + hours
  }</p><span> : </span><p class="number">${
    minutes > 9 ? minutes : "0" + minutes
  }</p><span> : </span><p class="number">${
    seconds > 9 ? seconds : "0" + seconds
  }</p><span></span>`;

  document.title = `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }:${seconds > 9 ? seconds : "0" + seconds}`;
}

/* buscar los valores que escriben los usuarios y transformarlos de string a numeros */
function parseTime() {
  hours = Number(inputs[0].value); //convertimos los valores de los inputs de string a number
  minutes = Number(inputs[1].value); //convertimos los valores de los inputs de string a number
  seconds = Number(inputs[2].value); //convertimos los valores de los inputs de string a number
}

/* arrancar el contador y frenar el contador */
function countdown() {
  repeater = setInterval(runner, 1000); //recive una funcion y un tiempo. Para activar y frenar cuando se acabe el tiempo
}
/* calcula cuanto tiempo queda que llava a la funcion para actualizar con los valores con el tiempo que quede */
function runner() {
  /* si tengo de 0 segundos, resta segundos */
  if (seconds > 0) {
    seconds--;
  } else {
    /* si tengo de 0 segundos pero tengo mas de 0 minutos, pone segundos en 59 y restale 1 a minutos */
    if (minutes > 0) {
      seconds = 59;
      minutes--;
    } else {
      /* si tengo 0 segundos, 0 minutos pero tengo mas de 0 horas, pone segundos en 59 y restale 1 a horas */
      if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
      } else {
        /* sino arranca a larma */
        alarm.play();
      }
    }
  }

  setTimer();
}

function stopTimer() {
  clearInterval(repeater);
  location.reload();
}
