let number_x = 10;
const number_y = 15;

// Arrow function
 let func = (val) => {
     console.log("Hey im arrow " + val + ". And this is my value from num x and y: " + number_x + ", " + number_y);

 }


// Class
 class Person {

    constructor(){
        this.name = "wojtek";
    }

    //template string
    sayName(){
       console.log('Hi, I am a ' + this.name + '.');
    }
}

module.exports = {
    fun: func,
    Person
}
