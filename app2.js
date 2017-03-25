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
