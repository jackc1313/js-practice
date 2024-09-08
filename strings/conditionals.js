//operatori logici: || OR, && AND, ! NOT
// || -> booleano
let orario = 9;
if (orario < 10 || orario > 18) {
    console.log("L\'ufficio e\' chiuso."); // lo slash \ mi permette di inserire virgolette nella stringa
};
/* il comportamento di || e' tale per cui se ci sono piu'
valori, lui li analizza finche' non ne trova uno che ritorni
valore vero, e lo restituisce. */

/* && -> l-opposto di ||, perche' si ferma al primo valore
falso*/
let ore = 12;
let minuti = 30;
if (ore == 12 && minuti == 30) {
    console.log('Sono le 12:30.');
};
// && ha precedenza maggiore di ||

//! -> converte l'operatore a booleano e ritorna l'opposto
console.log(!true);
//spesso si usa !! per rapida conversione a booleano
console.log(!!0); //false