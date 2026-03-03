// arrow functons with parameters 

const greet = (name) =>{
    console.log("Hello" + name + "How have you been ? I trust that you are good")
}
greet("James")
greet("Gift")
// assignment => research on using let 

// example 2 
console.log("========")
// Below is a function to find the are of a circle 
const pi = 3.142;
const circleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is:" + area + "cm\u00B2")
}
circleArea(pi,7)
circleArea(pi,28)
console.log("========")
// come up with your own example of an arrow function that utilises three parameters

const bmi = (weight, height) =>{
    const BMI = weight / (height * height);
    console.log("this is the BMI:" + BMI)
};
bmi(70, 1.75);
bmi(60, 1.6);