/*
Creare una pagina web che tramite uno script consenta di prendere in ingresso un numero (effettuare i necessari controlli di validità)
Il numero potrà essere incrementato o decrementato attraverso dei bottoni.
Se il valore è positivo sarà mostrato sulla pagina in verde, altrimenti in rosso.
Sarà presente un bottone reset che riporterà il contatore al valore inserito inizialmente.
*/
let numero;
let verificato;

do {
  numero = prompt("Inserisci un numero");
  verificato = valido(numero);
} while (!verificato);

document.addEventListener("DOMContentLoaded", function () {
  const n = document.getElementById("numero");
  n.innerText = numero;
  if (numero < 0) {
    n.style.color = "red";
  }
  const buttons = document.getElementsByTagName("button");
  console.log(buttons);
  let valore = numero;
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
      valore = clicked(event, valore, numero);
      n.innerText = valore;
      if (valore < 0) {
        n.style.color = "red";
      } else {
        n.style.color = "green";
      }
    });
  });
  console.log(valore);

});

function clicked(event, valore, numero) {
  console.log("entati nel click");
  console.log(event.target);
  let buttonId = event.target.getAttribute("id");
  console.log(buttonId);
  if (buttonId == "diminuire") {
    valore--;
  } else if (buttonId == "reset") {
    valore = numero;
  } else if (buttonId == "aumentare") {
    valore++;
  }

  return valore;
}

function valido(n) {
  if (isNaN(+n) || n == null || !Number.isInteger(+n)) {
    alert("Il numero inserito non è valido riprova");
    return false;
  } else {
    //console.log("Il numero inserito è valido");
    return true;
  }
}
