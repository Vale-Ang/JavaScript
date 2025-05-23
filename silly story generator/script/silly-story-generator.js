/* 
Creare un form con:
- Input di testo <<Nome>>
- Radio button <<US>> e <<UK>>
- Bottone di sottomissione <<Genera storia>>
Aggiungere un paragrafo vuoto che conterrà la storia generata.
Predisporre una variabile con il seguente testo:
"C'erano 95 gradi Fahrenheit quando :protagonista: uscì per una passeggiata al centro di :luogo:"
Predisporre 2 costanti con le seguenti liste
- protagonisti: Aldo, Giovanni e Giacomo;
- luoghi: Roma, Napoli, Torino.
Allo scatenarsi dell'evento submit, va generata una nuova storia, nel cui testo va usato il nome inserito
primo campo di input (se valorizzato, altrimenti sceglierne uno dalla prima lista) come nuovo protagonista,
scelto un luogo dalla seconda lista, e convertita la misura della temperatura dall'unità americana (Fahrenheit)
a quella italiana (Celsius) in base al valore della radio button.
*/
let nome;
let scelta;
let luogo;
let stringa;
document.addEventListener('DOMContentLoaded', () => {
    const nomeInput = document.getElementById('nome');
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const sceltaRadio = document.querySelector('[name="scelta"]:checked');
        nome = sceltaNome(nomeInput.value);
        scelta = sceltaGradi(sceltaRadio.value);
        luogo = sceltaLuogo();
        stringa = "C'erano " + scelta +" quando "+ nome + " uscì per una passeggiata al centro di " + luogo
        console.log(stringa);
        document.getElementById("testo").innerText = stringa;
    }) 
})

function sceltaLuogo() {
        let luoghi = ['Torino', 'Roma', 'Milano']
        let i = Math.trunc(Math.random()*3)
        luogo = luoghi[i];
    return luogo;
}

function sceltaGradi(sceltaRadio) {
    console.log(sceltaRadio)
    if (sceltaRadio == 'Uk') {
        scelta = '35° Celsius'
    } else if (sceltaRadio == 'Us') {
        scelta = '95° Fahrenheit'
    }
    return scelta;
}

function sceltaNome(nomeInput) {
    if (nomeInput == null|| nomeInput == '') {
        let nomi = ['Aldo', 'Giovanni', 'Giacomo']
        let i = Math.trunc(Math.random()*3)
        nome = nomi[i];
    } else {
        nome = nomeInput;
    }
    return nome;
}