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

//Dziedziczenie konstruktorów

//human
function VeryFriendlyConstructor(){
  //sdfsdf
}

//js
// to jest podtyp:                  to jest supertyp:             (VeryFriendlyConstructor jest podtypem Object)
VeryFriendlyConstructor.prototype = Object.create(Object.protoype, {
  constructor:{
    value: MyConstructor,
    enumerable: true,
    configurable: true,
    writable: true
  }
});}
//

function Rectangle(length, width){
  console.log('Został wywowłany Rectangle');
  this.length = lenght;
  this.width = width;
}

Rectangle.prototype.getArea = function (){
  return this.length * this.width;
}

Rectangle.prototype.toString = function (){
  return '[Rectangle '+this length + " "+this.width+']';
}

function Square (size){
  this.length = size;
  this.width = size;
}

//Square.prototype = new Rectangle();
//Square.prototype.constructor = Square;
//powyzej to trochę na piechote, ponizej inaczej:
Square.prototype = Object.create(Rectangle.prototype, {
  constructor:{
    value: Square,
    enumerable: true,
    configurable: true,
    writable: true
    //te 3 powyzsze linijki są z definicji na true, nie trzeba ich pisac
  }
})



Square.prototype.toString =function(){
  return '[Square ' + this.length + ' na ' +this.width + ']';
};

var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.getArea()); //50
console.log(square.getArea()); //36

console.log(rect.toString()); //'Rectangle'
console.log(square.toString());//'Square'

console.log(rect instanceof Rectangle); //true
console.log(rect instanceof Square); //false
console.log(rect instanceof Object); //true

console.log(square instanceof Square); //true
console.log(square instanceof Rectangle);//true
console.log(square instanceof Object);//true

// Przywłaszczanie konstruktorów

function Rectangle(length, width){
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function (){
  return this.length * this.width;
}

Rectangle.prototype.toString = function (){
  return 'Rectangle '+this length + " x "+this.width;
}

function Square(size){
  Rectangle.call(this, size, size)
}

Square.prototype = Object.create(Rectangle.prototype, {
  cnstructor:{
    value:Square
  }
});

Square.prototype.toString = function(){
  return 'Square ' +this length + " x "+this.width;
}

var square = new Square(6)


//Singleton
var Singleton = (function(){
  console.count();
  var instance;

  function createInstance(){
    var obj = new Object('Zostalem stworzony');
    return obj;
  }

  return{
    getInstance: function(){
      if (!instance){
        console.log('zwracam instancje');
        createInstance()
      }
      return instance
    }
  }
})();

function init(){
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log(instance1 === instance2)
}

init();
