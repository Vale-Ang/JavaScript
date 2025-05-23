/*
Creare un sito web per gestire l'inserimento, la modifica e l'eliminazione di note testuali
Ogni nota avrà:
- Un titolo
- Un testo
- Una data di creazione/modifica
- Un bottone per modificare la nota
- Un bottone per salvare le modifiche (visibile solo nel momento in cui si sta modificando la nota)
- Un bottone per eliminare la nota.
*/
document.addEventListener('DOMContentLoaded', () => {
    const contenitore = document.getElementById('nuovo');
    const contenitoreModifica = document.getElementById('modifica');
    const titoloInput = document.getElementById('titolo');
    const testoInput = document.getElementById('testo');
    const form = document.querySelector('form');
    const now = new Date();
    // const invio =document.getElementById('invio');
    console.log ('prima');
    form.addEventListener('submit', (event) => {
        console.log ('event');
        event.preventDefault();
        crea(titoloInput.value, testoInput.value, contenitore, now, contenitoreModifica);

    });
        
})

function crea(titoloInput, testoInput, contenitore, now, contenitoreModifica)  {
        console.log ('dentro onclick');
        //const h = document.createElement('h1');
        const p = document.createElement('p');
        p.innerText = `Titolo: ${titoloInput}
        Testo: ${testoInput}
        Data: ${now}`;
        const modificaButton =document.createElement('button');
        modificaButton.innerText = 'modifica';
        modificaButton.onclick = (event) => {
            event.stopPropagation();
            const temporaneo = event.target.parentNode;
            const a = document.createElement('p');
            console.log(temporaneo.nextSibling);
            a.innerText = temporaneo.nextSibling;
            const contmod = contenitoreModifica.classList;
            contmod.remove('dnone');
            contmod.add('bnone');
            temporaneo.remove();
            console.log(a);
            contenitoreModifica.before(a);
        }
        
        const eliminaButton = document.createElement('button');
        eliminaButton.innerHTML = '&times;';
        eliminaButton.onclick = (event) => {
            event.stopPropagation();
            const parent = event.target.parentNode;
            console.log(parent.children);
            console.log(parent.nextSibling);
            console.log(parent.previousSibling);
            parent.remove();
        }
        p.appendChild(modificaButton)
        p.appendChild(eliminaButton);
        

        contenitore.appendChild(p);
    }
    function salvaModifica() {}