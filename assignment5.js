// Write a function that prints the numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
const Fizzbuzz = () => {
    for (let i = 1; i <= 50; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FIZZBUZZ");
        } else if (i % 3 === 0){
            console.log("FIZZ");
        } else if (i % 5 ===0);{
            console.log("BUZZ");
        }{
            console.log(i);
        }
    }
};

Fizzbuzz();