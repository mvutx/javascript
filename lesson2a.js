// Object data type:
// an onject in javascript is data type that stores data in form of keyvalue pairs

let person = {
    Name : "Kivuti Gift",
    Age : 70,
    isRegistered : true
};
console.log("the Details of the person is:", person)

// first notation by use of the square brackets
console.log(person["age"])

// second method by use of the dot (.)
console.log(person.Name)

// check the data type
console.log(typeof(person))

// Array data type:
// Refers to collection of items that are on indexes
fruits = ["Mango", "Pineapple", "Apple", "Banana", "Melon", "Lemon", "Grapes"]

console.log("The entire array of fruts is : ", fruits)

// To access the items of an array we use the index
console.log(fruits[3])

// you can sliceitems of an array 
console.log(fruits.slice(2,5))

