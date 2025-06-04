/* Realizzare un'applicazione da console che simula una gestione utenti, con un menu interattivo che permetta all’utente di:

Aggiungere un nuovo utente (inserendo nome, cognome, anni, hobby)
nome e cognome saranno una stringa, anni un numero, hobby una stringa

Visualizzare la lista utenti

Cercare utenti per nome (elencare quelli con quel nome)
Cercare utenti per cognome (elencare quelli con quel cognome)
Cercare utenti per nome e cognome nome (elencare quelli con quei nome e cognome)
Cercare utenti per età (con quella eta)
Cercare utenti per età superiore (con più quella eta)
Cercare utenti per età inferiore (con più quella eta)

numero di utenti registrati

Uscire dal programma
1) Visualizza utenti
2) Inserisci utente
3) Cerca utente
4) Numero utenti
5) Esci
Se scelgo 3

1) Cercare utenti per nome (elencare quelli con quel nome)
2) Cercare utenti per cognome (elencare quelli con quel cognome)
3) Cercare utenti per nome e cognome nome (elencare quelli con quei nome e cognome)
4) Cercare utenti per età (con quella eta)
5) Cercare utenti per età superiore (con più quella eta)
6) Cercare utenti per età inferiore (con più quella eta)
*/

console.clear();
let continua = true;
let scelta;
let sceltaUtente;
let nome;
let cognome;
let anni;

const rs = require("readline-sync");
const listaUtenti = [
  {
    nome: "Marco",
    cognome: "Rossi",
    anni: 39,
    hobby: "pesca",
  },
  {
    nome: "Sara",
    cognome: "Bianchi",
    anni: 39,
    hobby: "lettura",
  },
  {
    nome: "Fabio",
    cognome: "Bianchi",
    anni: 56,
    hobby: "calcio",
  },
  {
    nome: "Daniele",
    cognome: "Verdi",
    anni: 25,
    hobby: "videogiochi",
  },
  {
    nome: "Miriana",
    cognome: "Gialli",
    anni: 24,
    hobby: "lingue",
  },
  
];


do {
  do {
    scelta = rs.questionInt(`Inserisci un numero tra 1 e 5: 
1) Visualizza utenti
2) Inserisci utente
3) Cerca utente
4) Numero utenti
5) Esci
`);
  } while (scelta < 1 || scelta > 5);
  switch (scelta) {
    case 1:
      for (let i = 0; i < listaUtenti.length; i++) {
        toString(i,listaUtenti);
        console.log(`------------------------------`);
      }
      break;

    case 2:
      listaUtenti.push({
        nome: rs.question("Inserisci il nome: "),
        cognome: rs.question("Inserisci il cognome: "),
        eta: rs.questionInt("Inserisci l'età: "),
        hobby: rs.question("Inserisci un hobby: "),
      });
      break;

    case 3:
      do {
        sceltaUtente = rs.questionInt(`1) Cercare utenti per nome
2) Cercare utenti per cognome
3) Cercare utenti per nome e cognome nome
4) Cercare utenti per età 
5) Cercare utenti per età superiore 
6) Cercare utenti per età inferiore`);
      } while (sceltaUtente < 1 || scelta > 6);
      switch (sceltaUtente) {
        case 1:
          nome = rs.question(`Inserisci il nome: `);
          for (let i = 0; i < listaUtenti.length; i++) {
            if (nome == listaUtenti[i].nome) {
              toString(i,listaUtenti);
            }
          }
          break;
        case 2:
          cognome = rs.question(`Inserisci il cognome: `);
          for (let i = 0; i < listaUtenti.length; i++) {
            if (cognome == listaUtenti[i].cognome) {
              toString(i,listaUtenti);
            }
          }
          break;
        case 3:
          nome = rs.question(`Inserisci il nome: `);
          cognome = rs.question(`Inserisci il cognome: `);
          for (let i = 0; i < listaUtenti.length; i++) {
            if (nome == listaUtenti[i].nome) {
              if (cognome == listaUtenti[i].cognome) {
                toString(i,listaUtenti);
              }
            }
          }
          break;
        case 4:
          anni = rs.questionInt(`Inserisci gli anni: `);
          for (let i = 0; i < listaUtenti.length; i++) {
            if (anni == listaUtenti[i].anni) {
              toString(i,listaUtenti);
            }
          }
          break;
        case 5:
          anni = rs.questionInt(`Inserisci gli anni: `);
          for (let i = 0; i < listaUtenti.length; i++) {
            if (anni < listaUtenti[i].anni) {
              toString(i,listaUtenti);
            }
          }
          break;
        case 6:
          anni = rs.questionInt(`Inserisci gli anni: `);
          for (let i = 0; i < listaUtenti.length; i++) {
            if (anni > listaUtenti[i].anni) {
              toString(i,listaUtenti);
            }
          }
          break;
      }
      break;

    case 4:
      console.log(listaUtenti.length);
      break;
    case 5:
        continua = false;
        break;
    default:
      console.log("Error");
      break;
  }

} while (continua);

// function toString(){

// }

function toString(i,listaUtenti){
  console.log(`nome: ${listaUtenti[i].nome}
cognome: ${listaUtenti[i].cognome}
anni: ${listaUtenti[i].anni}
hobby: ${listaUtenti[i].hobby}`)
}