let name = "Jacopo";
const greeting = `Ciao, ${name}!`;
console.log(greeting);

//unire variabili
let one = 'Ciao, ';
let two = 'chi sei?';
const joined = `${one}${two}`;
console.log(joined);

//concatenare stringhe
let saluto = 'Ciao';
let nome = 'Jacopo';
console.log(saluto + ", " + nome);

//espressioni nelle stringhe
let song = '1979';
let score = 9;
let highestScore = 10;
let output = `Mi piace la canzone ${song}, le ho dato un voto di ${
    (score / highestScore) * 100
}%`;
console.log(output);

//stringhe multilinea con backticks
let multiLinea = `Shakedown, 1979
Cool kids never had the time`;
console.log(multiLinea);
//oppure con \n e virgolette normali
let ancoraMultiLinea = 'Shakedown, 1979\nCool kids never had the time';
console.log(ancoraMultiLinea);

//per includere le virgolette in una stringa
let dialogo = `Lei disse "Ciao, Jacopo!"`;
console.log(dialogo);

//convertire stringa in numero
let unaStringa = '123';
let unNumero = Number(unaStringa);
console.log(typeof unNumero);
//con la funzione String() faccio la stessa cosa ma converto in stringa

