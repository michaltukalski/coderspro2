//dzień pierwszy weekendu 6.
//powtórka z zeszłego tygodnia

//definiowanie właściwości

var person = {
  name: 'kuba'
}

person.age = 11;

//[[Put]] wewnętrzna metoda JS do tworzenia nowych właściwości
//[[Set]] wewnętrzna metoda JS do nadpisywania istniejących właściwości

person.name = 'Bartek';
console.log (person.name); //Bartek

//wykrywanie własnosci

if (person.age){
  //nie robic tak, bo jezeli age bedzie 0 null NaN "" lub undefined, to warunek wyjdzie false;
}
//lepiej:
obiekt.hasOwnProperty("property")
("property" in obiekt)

var car = {
    type: "cabrio"
}

console.info(car.hasOwnProperty("type")) //true
console.info(car.hasOwnProperty("toString")) //false

//usuwanie wlasciwosci
var animal = {
  gender:'female'
}
console.log(animal.gender); //female

delete animal.gender;
console.log(animal.gender); //undefined

//

var obj = {
  string: 'abc'
}

for (var property in obj){
  console.log(property); //tutaj pokaże nazwę właściwości
  console.log(obj[property]); // tutaj będzie wartośc właściwości
}
// _proto nie będzie wyswietlone ponieważ [[Enumerable]] jest ustawione na false - jak w wiekszosci wlasciwosci natywnych

console.log(Object.keys(obj));
console.log(property.propertyIsEnumerable("__proto__")); //false
console.log(property.propertyIsEnumerable("string")); //true

//setter getter

var person = {
  _name: 'Marcin',
    get name(){
      console.log("Hello %s", this._name) //%s wyswietla pierwsza zmienna jaka znajdzie po przecinku - drugi %s to drugi po przecinku
      console.log(`Hello ${this._name}`) // notacja w ES6 - backquote - ten pod tylda
      return this._name;
    }
    set name(value){
      this._name = value
    }
}
console.log(person.name);
person.name = 'Zosia';
console.log(person.name);

//atrybuty wspólne

// [[Enumerable]] [[Configurable]]
//Do zmiany tych wlasciwosci uzywa sie Object.defineProperty()

var person = {
  name: "Ula"
}

console.log(person.propertyIsEnumerable('name')); //true
Object.defineProperty(person, 'name', {
  enumerable: false
})
console.log(person.propertyIsEnumerable('name')); //false


// CONFIGURABLE - blokuje dana wlasciwosc i nie mozna jej juz edytowac!! trzeba odpalic program od nowa
var person = {
  name: "Ula"
}

console.log(person.propertyIsEnumerable('name')); //true
Object.defineProperty(person, 'name', {
  configurable: false
})

Object.defineProperty(person, 'name', {
  enumerable: false
})
console.log(person.propertyIsEnumerable('name')); //false


// USE STRICT - mozna wsadzic w taka funkcje dla celow malych kodzikow

(function(){

"use strict";

var person = {
  name: "Ula"
}

console.log(person.propertyIsEnumerable('name')); //true
Object.defineProperty(person, 'name', {
  configurable: false
})

Object.defineProperty(person, 'name', {
  configurable: true
})

Object.defineProperty(person, 'name', {
  enumerable: false
})
console.log(person.propertyIsEnumerable('name')); //false)

})() //IIFE

//atrybuty wspólone
//[[value]], [[writable]] - pozwala lub nie do tej wartosci cos wpisac?

(function(){

"use strict";

var person = {
  name: "Konrad"
};

})()

var person = {};
Object.defineProperty(person, 'name', {
  value: "Pawel",
  enumerable: true,
  configurable: true,
  writable: true
});

//Object.seal()
//extensible i configurable ustawia na false, ale mozna zmieniac wartosc

(function(){

"use strict";

var person = {
  name: "Konrad"
};

console.log(Object.isExtensible(person)); //true;
console.log(Object.isSealed(person)); //false;

Object.seal(person);
console.log(Object.isExtensible(person)); // false;
console.log(Object.isSealed(person)); //true

person.sayHello = function (){
  console.log(this.name);
};

console.log('sayHello' in person); //false

person.name = 'absd';
console.log(person.name); //'absd'
})()

//Object.freeze() - po wykonaniu nie mozna dodawac ani usuwac wlasciwosci

(function(){
"use strict";
var person = {
  name: "Konrad"
};

console.log(Object.isExtensible(person)); //true;
console.log(Object.isFrozen(person)); //false;
Object.freeze(person);
console.log(Object.isFrozen(person)); //false;
person.sayGoodbay = function (){
  console.log('say papa', this.name);
}
console.log('sayGoodbay' in person); //false

person.name = "Piotr";
console.log(person.name); // 'Konrad'
})()


// konstruktory i prototypy

function Computer(){

}

var comp1 = new Computer; // ()na końcu nie jest potrzebny
var comp2 = new Computer;
console.log(comp1.constructor === Computer); //true

function Person(name){
  this.name = name;
  this.sayHello = function(){
    console.log("hghgh");
  };
}

var person1 = new Person('Pioter');
var person2 = new Person('Koniu');

console.log(person1.name); // "Pioter"

(function () {
  "use strict";

  function Car(name){
    Object.defineProperty(this, 'name', {
      get: function (){
        return name;
      }
      set: function (value){
        name = value;
      }
    })

    this.brrrrum = function (){
      console.log("Bruuuuummmmmmm");
    }
  }

  var car1 = new Car("Szybki");
  car1.brrrrum();
})();



(function () {
  "use strict";

  function Person(name){
    this.name = name;
  }

  Person.prototype.sayHello = function (name){
    console.log("Hello ", name);
  }

  per1 = new Person('Lila');
  per1.sayHello()


})();

(function () {
  "use strict";

  function Person(name){
    this.name = name;
  }

  Person.prototype.arrPerson = [];

  per1 = new Person('Ula');
  per2 = new Person('Maria');
  per1.arrPerson.push('czerwony');
  per2.arrPerson.push('niebieski');

  console.log(per1.arrPerson); // ['czerwony', 'niebieski']
  console.log(per2.arrPerson); // ['czerwony', 'niebieski']


})();

(function () {
  "use strict";

  function Person(name){
    this.name = name;
  }
//definiowanie kilku metod na raz
  Person.prototyp = {
    sayHello: function(){
      //asdas
    },
    toString: function(){  //nadpisze domyslnego toString

    }
  }

  per1 = new Person('Ula');
  per2 = new Person('Maria');
  per1.arrPerson.push('czerwony');
  per2.arrPerson.push('niebieski');

  console.log(per1.arrPerson); // ['czerwony', 'niebieski']
  console.log(per2.arrPerson); // ['czerwony', 'niebieski']


})();
