// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let numero = parseInt(prompt('inserisci un numero'));
let risultato;
if(numero % 2 == 0) {
    risultato = numero;
} else {
    risultato = numero + 1;
}

console.log(risultato);