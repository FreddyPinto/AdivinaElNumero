import "./styles.css";

const feedback = {
  alto: "Ops numero muy alto",
  bajo: "Ups numero muy bajo",
  // TODO: agregar 2 casos mas de feedback que se muestren si el usuario
  // esta un 20% por encima o por debajo del numero
  cercaAlto: "Uy estas muy cerca pero te pasaste",
  cercaBajo: "Uy estas muy cerca pero te falta",
  correcto: "GANASTE ¡¡"
};

const numMax = 100; // TODO: en futuro release este numero se debe capturar de una alarma
const numMin = 10; // TODO: en futuro release este numero se debe capturar de una alarma
let numTry = 5; // TODO: en futuro release este numero se debe capturar de una alarma
const randomNumber = Math.floor(Math.random() * (numMax - numMin) + numMin);
// randomNumber: (0 * (100-10)) + 10 = 10
// randomNumber: (1 * (100-10)) + 10 = 100
const inputNumber = document.getElementsByTagName("input")[0];
const resultFeedback = document.getElementById("result");
const triesNumber = document.getElementsByTagName("h3")[0];
triesNumber.textContent = `tienes ${numTry} intentos`;

// TODO: si el usuario coloca en el input un numero mayor al maximo
// permitido emitir una alarma y settear en cero el valor el input

inputNumber.addEventListener("input", ({ target: { value: userNumber } }) => {
  console.log(userNumber, randomNumber);
  if (numTry === 0) {
    // TODO: si se cumple esta condicion reiniciar el juego
    // reiniciar el numero de intentos
    alert("te quedaste sin intentos");
    return;
  }
  numTry = numTry - 1;
  triesNumber.textContent = `tienes ${numTry} intentos`;
  if (userNumber > randomNumber) {
    resultFeedback.innerText = feedback.alto;
    resultFeedback.classList.add("overNumber");
    resultFeedback.classList.remove("underNumber");
  } else if (userNumber < randomNumber) {
    resultFeedback.innerText = feedback.bajo;
    resultFeedback.className = "underNumber";
  } else {
    resultFeedback.innerText = feedback.correcto;
    resultFeedback.setAttribute("class", "win");
  }
});
