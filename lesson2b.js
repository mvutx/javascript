//comparison operators 
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)

// Tripleequal sign -research
// logical operatorsare used to evaluate two or more conditions and they give a boolean answer
// logical AND (&&) evaluates to true if all the  conditons are true 
console.log(number1< number2 && (number2 > number1) && (number3 > number2)) 
// logical OR (|) it evaluates to true f one of the condition is true.
console.log(number1< number2 || (number2 > number1) || (number3 > number2)) 

// logical not (!) it is used to negate a condition/statement
console.log(!(number1 < number2))