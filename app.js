//literał obiektów
var car ={
  manufacturer: "Ford",
  model: "Mondeo"
};

var car1 = {
  'manufacturer origin':"Ford",
  model: 'Mondeo'
};

var car2;
car2.manufacturer = "Fiat";
car2.model = 500;

//literał tablic
var arr=["blue", "green", "yellow"];

//literał wyrażeń regularnych

var numbers = /\d+/g;

var numbers2 = RegExp('\\d+', 'g');

//dostęp do kluczy

var arr = [];
arr.push(3333

var method = 'push';
array[method](3453);

//identyfikowanie typów referwncyjnych

function add(a,b){
  return a+b;
}
(typeof add) //function

var item = [];
var obj = {};

console.log(item instanceof Array); //true
console.log(item instanceof Object); //true
console.log(obj instanceof Object); //true
console.log(obj instanceof Array); //false
console.log(add instanceof Function); //true
console.log(add instanceof Object); //true

console.log(Array.isArray(item)); //true //tylko do array, nie do function itp

//typy opakowujace (primitive wrapper types)

//string number boolean
var name = "Paweł";
var firstChar = name.charAt(0);

//to co sie dzieje w tle:

var name1 = "marcin";
var temporary = new String(name1);
var firstChar1 = temporary.charAt(0);
temporary = null;
console.log(firstChar1);


var name = "Grzesiek";
var name.last = "Kowal";
console.log(name.last) //undefined bo name jest stringiem - typem prostym

var name2 = "zosia";
var temp = new String(name2);
temp.last = "kowalska";
temp = null;
var temp = new String(name2);
console.log(temp.last); // undefined
temp =null;


var name3 = "alfred";
var count = 10;
var found = false;
console.log(name3 instanceof String); //false bo instanceof bada instancje obiektu string a nie typ string
console.log(count instanceof Number); //false typeof dałoby true
console.log(found instanceof Boolean); //false


var name4 = new String ("bonzo");
var count1 = new Number(10);
var found1 = new Boolean(false);

console.log(typeof name4);
console.log(typeof count1);
console.log(typeof found1);


// Funkcje

// Właściwoś typu Function - [[Call]]

function add(a,b){
  return a+b;
}

//wyrażenie funkcji
var add = function (a,b){
  return a+b;
};

//Funkcje jako wartośc

function sayHello(){
  console.log("HI");
}

sayHello();
var sayHello2 = sayHello;

var numbers = [1,2,3,4,5,6,78];
numbers.sort(function(a,b){
  return a-b;
})

// parametry funkcji

function show (value){
  return value;
}
console.log(show("Hi")); //Hi
console.log(show("Hi", 34)); //Hi
console.log(show.length); // 1 - arnośc funkcji

show = function(){
  return arguments[0];
};
console.log(show("Hello")); //"Hello"
console.log(show("Hello", 45));//Hello
console.log(show.length);// 0


function sum(){
  var result = 0;
  var len = arguments.length;
  var i=0;

  while(i < len){
    result += arguments[i];
    i++
  }
  return result;
}
console.log(sum(1,5)); //6
console.log(sum(1,5,7));//13
console.log(sum(3));//3
console.log(sum());//0

//przeciążaddEventListener
function message(mes){
  console.log(mes);
}

function message(){
  console.log('Default');
}

message('Hello'); //Default


function message(message){
  if (arguments.length ===0){
    message = Default
  }
  console.log(message);
}

console.log(message("Hello"));//Hello
console.log(message());//Default


//this

var person = {
  name:"piotr",
  logName: function(){
    console.log(person.name);
  }
};

function aaSayHello(){
  console.log(this.name);
}

var person1 = {
  name:"pioter",
  sayHello: aaSayHello
};
var person2 = {
  name:"pablo",
  sayHello: aaSayHello
};
var name = "Kinga";

console.log(person1.sayHello()); //pioteer
console.log(person2.sayHello()); //pablo
console.log(aaSayHello()); //Kinga

//modyfikacja this

function logNameAll(arg){
  console.log(arg + ": "+this.name);
}

var person1 = {
  name:"pioter",
};
var person2 = {
  name:"pablo",
};

var name = "Obama";

logNameAll.call(this, 'global'); //global: Obama //odnosimy sie do obiektu funkcji a nie wywołujemy funkcje
logNameAll.call(person1, 'person1'); // person1: pioter
logNameAll.call(person2, 'person2'); // person2: pablo

//roznica jest taka, ze w apply mozna podac cala tablice parametrow, a w call tylko jeden parameter
logNameAll.apply(this, ['global']);
logNameAll.apply(person1, ['person1']);
logNameAll.apply(person2, ['person2']);

var logNameAll1 = logNameAll.bind(person1);  pioter, pablo, pioter
console.log(logNameAll1('person1'));

var logNameAll2 = logNameAll.bind(person2, "person2");
console.log(logNameAll2('person2'));

person2.logName = logNameAll1 ??

//Obiekty - działania modyfikacje

var person1 = {
  name: 'Paweł'
};

var person2 = new Object();

//dodanie [[Put]]
person2.name = 'Beata';
person1.age = 22;
person2.age = 33;

//modyfikacja [[Set]]
person1.name = 'grzes';
person2.name = 'rafal';


//Obiekty wykrywanie własności

var person={
  number:0
};

// NIEEEEEEEEEEEEEEEEEEE ROBIC, bo dla number = 0 będzie FALSE!
if (person.number){
  console.log('true')
}e;se{
  console.log('false');
}


var person1 = {
  name:'asd'
  age:34
}

var person2 = {
  name: 'oiue'
  age: 334
}
//Lepiej sprawdzac tak:
console.log('name' in person1); //true
console.log('age' in person2);  //true
console.log('height' in person2); //false

//ale mozna jeszcze tak
var person1 = {
  name:'asd'
  logName: function(){
    console.log(this.name);
  }
};

console.log('name' in person1); // true
console.log(person1.hasOwnProperty('name')); //
console.log('toString' in person1); //
console.log(person1.hasOwnProperty('toString')); //
