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

/*operatore ternario ? restituisce una opzione se la condizione
e' true, altrimenti ne ritorna un'altra */
//condizione ? codice : altro codice
let compleanno = false;
let saluti = compleanno ? console.log('buon compleanno!') : console.log('buongiorno.');


//if..else
let fattoShopping = false;
let soldiInTasca;
if (fattoShopping === true) { // === testa se due valori sono identici, e !== se non lo sono
    soldiInTasca = 'pochi';
} else {
    soldiInTasca = 'tanti';
}
console.log(soldiInTasca); //tanti

//else if -> per piu' di due opzioni
let tempoAtmosferico = 'soleggiato';
if (tempoAtmosferico === 'pioggia') {
    console.log('prendi un ombrello');
} else if (tempoAtmosferico === 'nuvoloso') {
    console.log('metti una felpa');
} else {
    console.log('oggi c\'e\' bel tempo!');
};

/*switch. 
sostituisce l'if in caso ci siano molte opzioni
perche' e' piu' descrittivo. la sintassi prevede piu' blocchi 
'case' con un valore. quando switch trova corrispondenza, si ferma
al 'break' piu' vicino. se non c'e' combinazione caso-valore,
viene eseguito il codice del default alla fine (opzionale).
ovviamente tutto questo a fronte di una selezione sulla pagina
web da parte dell'utente
i casi si possono raggruppare se danno la stessa risposta 
e' importante rispettare il tipo dell'elemento inserito*/
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}