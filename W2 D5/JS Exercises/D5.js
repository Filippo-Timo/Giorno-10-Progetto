/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < 4; i++) {
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

console.log("Questo è l'ordine alfabetico", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();

console.log("Questo è l'ordine invertito", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let element = pets.shift();
pets.push(element);
console.log("Esercizio 4", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AA 123 AA";
}

console.log("Esercizio 5", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Ferrari",
  model: "458 Italia",
  color: "red",
  trims: ["AA", "BB", "CC"],
  licensePlate: "DD 123 DD",
});

console.log("Esercizio 6 - parte 1", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log("Esercizio 6 - parte 2", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log("Ora justTrims è fatto in questo modo", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let index = numericArray.indexOf(32);

let counter = 0;

while (counter <= index) {
  console.log(numericArray[counter]);
  counter = counter + 1;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];

let characterPosition = [];

for (let i = 0; i < charactersArray; i++) {
  switch (charactersArray[i]) {
    case "a":
      characterPosition.push(1);
      break;
    case "b":
      characterPosition.push(2);
      break;
    case "c":
      characterPosition.push(3);
      break;
    case "d":
      characterPosition.push(4);
      break;
    case "e":
      characterPosition.push(5);
      break;
    case "f":
      characterPosition.push(6);
      break;
    case "g":
      characterPosition.push(7);
      break;
    case "h":
      characterPosition.push(8);
      break;
    case "i":
      characterPosition.push(9);
      break;
    case "l":
      characterPosition.push(10);
      break;
    case "m":
      characterPosition.push(11);
      break;
    case "n":
      characterPosition.push(12);
      break;
    case "o":
      characterPosition.push(13);
      break;
    case "p":
      characterPosition.push(14);
      break;
    case "q":
      characterPosition.push(15);
      break;
    case "r":
      characterPosition.push(16);
      break;
    case "s":
      characterPosition.push(17);
      break;
    case "t":
      characterPosition.push(18);
      break;
    case "u":
      characterPosition.push(19);
      break;
    case "v":
      characterPosition.push(20);
      break;
    case "!z":
      characterPosition.push(21);
      break;
    default:
  }
}

console.log(characterPosition);

// switch (charactersArray){
//   case for (let i = 0; i < alphabet; i++){
// alphabet[i]}
//   }

// }
