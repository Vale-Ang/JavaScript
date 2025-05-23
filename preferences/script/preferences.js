/*
Creare un form con 3 input:
- Scelta di un colore;
- Scelta di un font tra 10 opzioni di una select;
- Scelta tra tre immagini.
Alla pressione del tasto INVIA:
- Inserire all'interno di un div un titolo e una descrizione con applicato il font scelto dall'utente.
Inoltre inserire sotto l'immagine selezionata.
- Il colore di sfondo della pagina diventa quello scelto dall'utente.

Times New Roman
Arial, Helvetica, sans-serif
'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
font-family:
*/


let paragrafo;
let sceltaImmagine;
let sceltaFont;
document.addEventListener('DOMContentLoaded', () => {
    const paragrafoInput = document.getElementById('paragrafo');
    const form = document.querySelector('form');
    const primaClasse = document.getElementById('anone')
    const secondaClasse = document.getElementById('dnone')
    const foto = document.getElementById('fotodnone')
    const color = document.getElementById('favcolor')
    let colorValue = "#ff0000"
    document.querySelector("#favcolor").onchange = e => {
        console.log(e.target.value)
        colorValue = e.target.value;
    }
    form.addEventListener('submit', (event) => {
        
        console.log(colorValue)
        event.preventDefault();
        const sceltaRadioCarattere = document.querySelector('[name="sceltaCarattere"]:checked');
        const sceltaRadioImmagine = document.querySelector('[name="sceltaImmagine"]:checked');
        paragrafo = paragrafoInput.value;
        sceltaFont = sceltaCarattere(sceltaRadioCarattere.value);
        sceltaImmagine = sceltaGatto (sceltaRadioImmagine.value);
        const listPC = primaClasse.classList;
        listPC.remove('anone');
        listPC.add('dnone');

        // primaClasse.classList.remove('anone');
        // primaClasse.classList.add('dnone');
        secondaClasse.style.fontFamily = sceltaFont;
        document.getElementById("dnone").innerText = paragrafoInput.value;
        foto.src= sceltaImmagine;
        const listSC = secondaClasse.classList;
        listSC.remove('dnone');
        listSC.add('anone');
        const listFoto = foto.classList;
        listFoto.remove('dnone');
        listFoto.add('anone');

        document.getElementById("body").style = `background-color: ${colorValue}`
        // secondaClasse.classList.remove('dnone');
        // secondaClasse.classList.add('anone');
    }) 
})

function sceltaGatto(sceltaRadioImmagine) {
    console.log(sceltaRadioImmagine)
    if (sceltaRadioImmagine == 'Rasputin') {
        sceltaRadioImmagine = '../Foto/Rasputin.jpeg'
    } else if (sceltaRadioImmagine == 'Tamagotchi') {
        sceltaRadioImmagine = '../Foto/Tamagotchi.jpeg'
    }else if (sceltaRadioImmagine == 'Insieme') {
        sceltaRadioImmagine = '../Foto/Insieme.jpeg'
    }
    return sceltaRadioImmagine;
}
function sceltaCarattere(sceltaRadioCarattere) {
    console.log(sceltaRadioCarattere)
    if (sceltaRadioCarattere == 'Times New Roman') {
        sceltaFont = 'font: Times New Roman;'
    } else if (sceltaRadioCarattere == 'Arial') {
        sceltaFont = 'font: Arial;'
    }
    return sceltaFont;
}

