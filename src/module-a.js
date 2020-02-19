
let number_x = 10;
const number_y = 15;

// Arrow function

 func  =  (val) => "Hey im arrow " + val + ". And this is my value from num x and y: " + number_x + ", " + number_y;

console.log(func("function"));

// Class

class Person {

    constructor(){
        this.name = "Wojtek";
    }

    //template string
    sayName(){
        console.log('Hi, I am a ', this.name + '.');
    }
}
//call a method with template string
new Person().sayName();
