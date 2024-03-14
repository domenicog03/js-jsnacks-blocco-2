// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte 
// le cifre che compongono il numero.

const cifre = prompt('Scrivi un numero di 4 cifre');
//console.log(cifre);
let sum = 0;

for(let i = 0; i < cifre.length; i++) {
    const n = parseInt((cifre[i]));
    //console.log(n);
    sum += n;
    //console.log(n);
}

console.log(sum);