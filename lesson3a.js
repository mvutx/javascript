// javascript For Loop
//LOoops are used to iterate through something a number of time 
// structure ofthe for loop
// 1. for keyord followed b parenthesis
//2. initialisation , condition , increment/decrement
//3. body of the for loop

for(let i = 0; i <= 10; i++){
    console.log("The new value of i is: ", i)
}``

console.log("=================================")

for (let i = 0; i <= 10; i++){
    if(i === 6) {
        console.log("This is number 6");
    } else {
            console.log("The new value of i is:", i);
        }
}


// create a for loop used to print out all the leap  years from 2000 o 2026

for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}
// Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.