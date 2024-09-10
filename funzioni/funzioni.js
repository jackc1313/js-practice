function animalePreferito(animale) { //nelle tonde, il PARAMETRO
    return animale + " e\' il mio animale preferito"
}
console.log(animalePreferito("La scimmia")); //nelle tonde, l'ARGOMENTO

//funzione per generare un numero intero a caso
function random(numero) {
    return Math.floor(Math.random() * numero)
}
console.log(random(19));
/* sto continuando a usare console.log per 'invocare' le funzioni,
ma in realt' per invocarle bisogna scriverne il nome seguito dalle
parentesi*/

//arrow function: =>
let somma = (a, b) => a + b;
console.log(somma(2, 3));
//arrow function per moltiplicare numeri in un array
let numeri = [1, 2, 3, 4, 5];
let numeriDoppi = numeri.map(numero => numero * 2);
console.log(numeriDoppi);
//.map() itera un'operazione su tutti i numeri dell'array

let add7 = (a) => a + 7;
console.log(add7(5));

let moltiplica = (a, b) => a * b;
console.log(moltiplica(2, 3));

function palindromo(str) {
    return str === str.split("").reverse().join("");
}

console.log(palindromo("iresonoseri"));
console.log(palindromo("anna"));
console.log(palindromo("pastaalsugo"));