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

//switch
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
/* ho copiato questo codice. in sostanza, ho diversi casi e diverse scelte,
e in base a queste viene ritornato un risultato, con il comando 'break'.
invece, l-opzione di default:, alla fine, non ha bisogno di break perche' non 
vi e' altra opzioe dopo.*/

