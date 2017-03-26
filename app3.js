//dzien drugi weekendu 6

// Dziedziczenie - prototype chaining

var book = {
  title: 'Stary człowiek i morze'
}

var prototype = Object.getPrototypeOf(book);

console.log(prototype == Object.prototype); //true

//Metody dzeidziczone po object.prototype
// hasOwnProperty()
// propertyIsEnumerable()
// isPrototypeOf()
// valueOf()
// toString()

var now = new Date();
var earlier = new Date(2017, 01, 01); //2017-01-01

console.log(now>earlier) ;

//valueOf
var string = 'Hello World';
var response = string.valueOf();
console.log(response); //'Hello world'

// toString()
var book = {
  title: 'very title'
}
var message = 'Book ' + book;
console.log(message); //


//nadpisanie toString()
var book = {
  title: 'very title'
  toString: function(){
    return '[Book with title of ' + this.title +']'
  }
}
var message = 'Book = ' + book;
console.log(message); //

//modyfikowanie prototypów
Object.prototype.add = function(val){
  return this +val;
}

var book = {
  title: 'very title'
}

console.log(book.add(9)); // ''[object Object]9'
console.log('tytuł'.add(' ksiazki '));// 'tytuł ksiazki'         WWWWWOOOOOOOWWWWWWWWOOOOOOWOWWWWWW

console.log(document.add('pleple')) //[object HTMLDocument]pleple

//

var empty={};
for (var property in empty){
  if (empty.hasOwnProperty(property)){
    console.log(property);
  }
}

//Dziedziczenie obiektów

var book = {
  title: "Roboty"
}

var book1 = Object.create(Object.prototype, {
  title: {
    value: "Roboty 2",
    enumerable: true,
    configurable: true,
    writable: true
  }
})
console.log(book);
console.log(book1);


//

var person1 ={
  name:'Zuza',
  sayHello:function(){
    console.log(this.name);
  }
}

var person2 = Object.create(person1, ){
  name:{
    value: 'Ola',
    enumerable: true,
    configurable: true,
    writable: true
  }
}

person1.sayHello(); //'Zuza'
person2.sayHello();// 'Ola'

console.log(person1.hasOwnProperty('sayHello')); //true
console.log(person1.isPrototypeOf(person2)); //true
console.log(person2.isPrototypeOf(person1)); //false
console.log(person2.hasOwnProperty('sayHello')); //false

//zeby byc pewnym ze object nie bedzie dziedziczyl niczego - nie trzeba sie martwic o kolizje nazw
var emptyObject = Object.create(null);
console.log('toString' in emptyObject);
console.log('valueOf' in emptyObject);
