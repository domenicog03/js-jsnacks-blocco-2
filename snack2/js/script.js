// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt('Dammi la prima parola');
const parola2 = prompt('Dammi la seconda parola');

let userMessage;
if(parola1.length > parola2.length) {
    alert(parola2 + '-' + parola1);
} else if(parola1.length > parola2.length) {
    alert(parola1 + '-' + parola2);
} else {
    alert('le parole hanno la stessa lungehzza');
}

