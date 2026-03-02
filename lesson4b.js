// Anonymous Function in javascript.
//  these are functions that exist without a name

// below is an example of such functions:
// The below functions shall take the name of the variables they are contained in.

const greet = function(){
    console.log("Hello There , hope your monday is fine..")
}
console.log(typeof(greet))
greet();
// below is another anonymous function 
(function(){
    console.log("Welcome to the world of programming...")
})();

// Read on arrow function with and without parameters.
// Arrow Function Without Parameters
const sayHello = () => {
    console.log("Hello there, hope you are having a good day");
};

sayHello();

// Returning a Fixed Value
const getPi = () => {
    return 3.142;
};

console.log(getPi());

// Arrow Function With Parameters
//Adding Two Numbers
const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(5, 3));

//Greeting a Person
const greetUser = (name) => {
    return "Hello " + name + "!";
};

console.log(greetUser("Vuti"));

// Short Arrow Function
//Multiply Numbers
const multiply = (x, y) => x * y;

console.log(multiply(4, 3));

//Square a Number (One Parameter)
const square = n => n * n;

console.log(square(6));

//Arrow Function Inside a Loop (Real Application)
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);


