//creo le variabili dei btn
const btn_testo = document.getElementById('testo');
const btn_colora = document.getElementById('colora');
const btn_reset = document.getElementById('reset');
const btn_creaParagrafo = document.getElementById('crea_paragrafo');
const btn_eliminaParagrafo = document.getElementById('elimina_paragrafo');
//creo variabile paragrafo
const par = document.getElementById('par');
//creo variabile titolo
const titolo = document.getElementById('h1');





//creo funzione per colorare di azzurro
function colora_azzurro () {    
    titolo.classList.add('azzurro');    
}

//creo funzione per resettare il colore azzurro
function resetColoraAzzurro () {    
    titolo.classList.remove('azzurro');   
}

// creo funzione per creare paragrafo
function creaParagrafo() {
    // Controlla se esiste già un paragrafo creato
    if (!document.querySelector('p[data-creato="true"]')) {
        const newP = document.createElement('p');
        newP.textContent = 'Ho creato un nuovo paragrafo!';
        newP.setAttribute('data-creato', 'true'); 
        document.body.appendChild(newP);
        newP.classList.add('stileParagrafo');
        
    } else {
        alert('Esiste già un paragrafo. Non puoi aggiungerne altri.'); 
    }
}


// creo la funzione per modificare il titolo
function modificaTitolo() {
    titolo.textContent= "QUESTO E' IL NUOVO TITOLO";
}




