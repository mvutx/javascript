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