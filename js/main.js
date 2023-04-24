// PALINDROMO

let userWord = prompt("Inserisci una parola ti dirò se è un palindromo:");

//scorro la parola come array partendo da 0 con incremento
for (let i = 0; i < userWord.length; i++) {
    const element = userWord[i];
    console.log(element);
}

//scorro dall'ultima lettera della parola con decremento fino a 0
let reverseWord = "";
for (let i = userWord.length-1; i >= 0; i--) {
    const element = userWord[i];
    reverseWord += element;
}
console.log(reverseWord);

if (userWord === reverseWord) {
    console.log("La parola è palindroma!");
} else {
    console.log("La parola NON è palindroma.");
}

// ************************************************************************

// PARI E DISPARI

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let evenOdd = prompt("Scegli tra pari o dispari:");
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numberInRange(min, max) {
    let number2 = (Math.random() * (max - min) + min);
    return number2;
}

// Sommiamo i due numeri
let somma = (numberInRange(1, 5) + userNumber).toFixed(0);

// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto.
let user = `Il numero da te inserito è ${userNumber} e hai scelto ${evenOdd}.`
if (somma % 2 == 0 && evenOdd == "pari") {
    console.log(user + " Il risultato è " + somma + " quindi è pari hai vinto!")
}   else if (somma % 2 == !0 && evenOdd == "pari") {
    console.log(user + " Il risultato è " + somma + " quindi è dispari hai perso!")
}   else if (somma % 2 == !0 && evenOdd == "dispari")  {
    console.log(user + " Il risultato è " + somma + " quindi è dispari hai vinto!")
}   else if (somma % 2 == !0 && !evenOdd == "dispari") {
    console.log(user + " Il risultato è " + somma + " quindi è pari hai perso!")
}