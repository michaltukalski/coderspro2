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
