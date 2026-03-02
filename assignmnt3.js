// Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].

let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is:", largest);
print("====================")
//Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
print("====================")
// Task: Write a for loop to print all odd numbers from 1 to 19.
for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}
print("====================")
//Task: Write a for loop to count down from 10 to 1 and print the numbers in the console. 
for (let i = 10; i => 1; i --){
    console.log(i);
}
print("====================")

// loop to enable printing of leap years from 200 - 2026
for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}
