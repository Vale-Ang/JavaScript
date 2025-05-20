/*
Carta, Forbici, Sasso
- Creare uno script che chieda all'utente di inserire 1 per carta, 2 per forbici e 3 per sasso.
- Lo script genererà la scelta del computer e farà visualizzare l'esito della partita.
- È possibile effettuare più partite finchè l'utente non rifiuta di iniziare una nuova partita.
- Il punteggio verrà visualizzato alla fine (es. 1 vittoria - 3 pareggi - 5 sconfitte).
*/
let carta = '../immagini/carta.png';
let forbici = '../immagini/forbici.png';
let sasso = '../immagini/sasso.png';
let vittorie = 0;
let sconfitte = 0;
let pareggi = 0;
let verifica;
let continua;
let verificato;
let sceltaUtente;
let sceltaUtenteImmagine;
let risultati;


document.addEventListener('DOMContentLoaded', () => {
    console.log('inizio');
    const fotoUtente = document.getElementById('fotoUtente');
    const fotoAvversario = document.getElementById('fotoAvversario');
    const primaClasse = document.getElementById('form')
    const secondaClasse = document.getElementById('div')
 const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('entrato nel form');
    let sceltaCasuale = Math.trunc((Math.random()*30)/10 +1);
    const sceltaRadio = document.querySelector('[name="sceltaUtente"]:checked');
    sceltaUtente = sceltaRadioUtente(sceltaRadio.value, fotoUtente, carta, forbici, sasso);
    sceltaAvversario(sceltaCasuale, fotoAvversario, carta, forbici, sasso);
    //scambiare le classi
    const classe1 = primaClasse.classList;
        classe1.remove('bnone');
        classe1.add('dnone');
    const classe2 = secondaClasse.classList;
        classe2.remove('dnone');
        classe2.add('bnone');
    risultato(sceltaUtente, sceltaCasuale);
    console.log(`Vittorie ${vittorie}
    Sconfitte ${sconfitte}
    Pareggi ${pareggi}`)
  })
})

function si() {
    const primaClasse = document.getElementById('form')
    const secondaClasse = document.getElementById('div')
    const classe1 = primaClasse.classList;
    const classe2 = secondaClasse.classList;
        classe2.remove('bnone');
        classe2.add('dnone');
        classe1.remove('dnone');
        classe1.add('bnone');
}

function no() {
    const secondaClasse = document.getElementById('div')
    const classe2 = secondaClasse.classList;
    classe2.remove('bnone');
    classe2.add('dnone');
    const ris = document.getElementById('risultati');
    risultati = `Vittorie: ${vittorie}
    Sconfitte: ${sconfitte}
    Pareggi: ${pareggi}`;
    ris.innerText = risultati;
}

function sceltaAvversario(sceltaCasuale, fotoAvversario, carta, forbici, sasso){
    if (sceltaCasuale == 1) {
        fotoAvversario.src = carta;
    } else if (sceltaCasuale == 2) {
       fotoAvversario.src = forbici;
    }else if (sceltaCasuale == 3) {
        fotoAvversario.src = sasso;
    }
}
function sceltaRadioUtente(sceltaRadioUtente, fotoUtente, carta, forbici, sasso) {
   if (sceltaRadioUtente == 'carta') {
        sceltaUtente=1;
        fotoUtente.src = carta;
    } else if (sceltaRadioUtente == 'forbici') {
         sceltaUtente=2;
       fotoUtente.src = forbici;
    }else if (sceltaRadioUtente == 'sasso') {
         sceltaUtente=3;
        fotoUtente.src = sasso;
    }
    return sceltaUtente; 
}



// console.log(`Vittorie ${vittorie}
//     Sconfitte ${sconfitte}
//     Pareggi ${pareggi}`);
    
//     function isContinua(continua) {
//         if(continua == 'si') {
//             return true;
//         } else if (continua == 'no') {
//         risultati = `Vittorie ${vittorie}
//     Sconfitte ${sconfitte}
//     Pareggi ${pareggi}`;
//         return false;
//     }
// }

function risultato(sceltaUtente, sceltaCasuale) {
        if (sceltaUtente == sceltaCasuale) {
        pareggi++;
    } else if ((sceltaUtente == 1 && sceltaCasuale == 2)
        ||(sceltaUtente == 2 && sceltaCasuale == 3)
        //((sceltaUtente + 1) == sceltaCasuale) 
        || (sceltaUtente == 3 && sceltaCasuale == 1)) {
        sconfitte++;
    } else {
        vittorie++;
    }}

// function isCorretto(continua) {
//     if(continua == 'si' || continua == 'no') {
//         return true;
//     } else {
//         return false;
//     }
// }

// do{
    
    
    
//     let corretto;
//     do{
//         continua = prompt(`L'utente vuole continuare? Si/No`)
//         continua = continua.toLocaleLowerCase().trim();
//         corretto = isCorretto(continua);
//     } while (!corretto);
//     verifica = isContinua(continua);
// } while(verifica);


// function valido(n) {
//     if(isNaN(+n) || n == null || !Number.isInteger(+n) || n < 1 || n > 3) {
    //         alert("Il numero inserito non è valido riprova");
    //         return false;
    //     } else {
        //         //console.log("Il numero inserito è valido");
        //         return true;
        //     }
        // }



        // let sceltaUtente;
        // do{
        //     sceltaUtente = prompt(`Carta, Forbice, Sasso
        //     Seleziona un numero per scegliere cosa vuoi giocare
        //     1 - Carta
        //     2 - Forbici
        //     3 - Sasso`);
        //     verificato = valido(sceltaUtente);
        // } while (!verificato)
        // console.log(`l'utente ha scelto ${sceltaUtente}`)