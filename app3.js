//dzien drugi weekendu 6

// Dziedziczenie - prototype chaining

var book = {
  title: 'Stary człowiek i morze'
}

var prototype = Object.getPrototypeOf(book);

console.log(prototype == Object.prototype); //true
