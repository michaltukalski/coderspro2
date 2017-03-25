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
