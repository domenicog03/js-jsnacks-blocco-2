// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id 
// rosso i numeri dispari e in verde i numeri pari.

const n = [1,2,3,4,5,6,7,8,9];
const red = document.querySelector('#red');
const green = document.querySelector('#green');

// Scorriamo l'array
for(let i = 0; i < n.length; i++) {
    const instampa = n[i];
    

    if(instampa % 2 == 0) {
        green.innerHTML += `<div>${instampa}</div>`;
    } else {
        red.innerHTML += `<div>${instampa}</div>`;
    }
}