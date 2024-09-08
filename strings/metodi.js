/*esistono molti metodi relativi alle stringhe
String.length()*/
let text = 'ABCDEFG';
console.log(text.length);

//.charAt()
let text2 = 'Ciao!'
console.log(text2.charAt(0));
//String[]
console.log(text2[1]);

//String.slice()
let text3 = 'Apple, banana, kiwi'; //estraggo banana
console.log(text3.slice(7, 13));
//.substring()
console.log(text3.substring(13, 7)); //banana
//.substr() - il secondo parametro e' lunghezza, non posizione
console.log(text3.substr(7, 6)); //banana

//.toUpperCase()
console.log(text2.toUpperCase());
//esiste anche .toLowerCase()

//.replace()
console.log(text3.replace('banana', 'orange'));
