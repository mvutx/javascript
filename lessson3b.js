// while loop 
// runs aslong the given condition is true 
// below is an example
// 1. initialization of a variable
//2. while keyword
//3. condition to be checked
//4. body of the while loop

let i = 0;

while (i <= 10){
    console.log("The new value of i is:", i);
    i++;
}
confirm.log("========")
// //come up with a js example of a map loop

l// it creates a new array
let number =[1,2,3,4,5];
let squares =number.map(num => num**2);
console.log(squares)

//
const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]
// assignment -- Task: Write a for loop to print all odd numbers from 1 to 19. Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.