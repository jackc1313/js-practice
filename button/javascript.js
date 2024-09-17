const btn = document.querySelector("#btn");
btn.addEventListener("click", () => { 
    alert("Ciao!");
});

const buttons = document.querySelectorAll("button"); /* 'buttons'
e' un 'node list' con quesrySelectoAll, funziona un po' come un array*/

//il metodo .forEach itera tra tutti i bottoni
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
  });
});
//all'interno della funzione aggiungiamo un event listener per ogni bottone