//JavaScript Classes
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
JavaScript Classes are templates for JavaScript Objects.

JavaScript Class Syntax
Use the keyword class to create a class.
Always add a method named constructor()
//Syntax
class ClassName {
  constructor() { ... }
}
//Example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
} // The example above creates a class named "Car". The class has two initial properties: "name" and "year".

A JavaScript class is not an object. It is a template for JavaScript objects.

//Using a Class
When you have a class, you can use the class to create objects:
//Example
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

//The Constructor Method
The constructor method is a special method:
It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.

//Class Methods
Class methods are created with the same syntax as object methods.
Use the keyword class to create a class.
Always add a constructor() method.
Then add any number of methods.
//Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

/* Create a Class method named "age", that returns the Car age:
Example */
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
