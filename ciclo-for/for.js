//ciclo for
/*apro un ciclo for che sostituisce ogni cifra divisibile per tre
con la parola 'CIAO', fino al numero inserito dall'utente*/
let numero = parseInt(prompt('Inserisci il numero', ""));
for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0) { //divisore che restituisce il resto -> in questo caso deve essere zero
        console.log('CIAO');
    } else {
        console.log(i);
    }
};

