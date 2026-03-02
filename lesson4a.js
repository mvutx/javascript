// functions with parameters.
// parameters are values that get passed as arguments  when we invoke a function
// they help us create functions that can be reusable throughout a program


function greeting(name){
    console.log("Hello" , name, "How have you been")
}
greeting("Kivuti Gift")
greeting("John James")
greeting("John James ")

console.log("==================")
// below is a function with parameters to calculate the sum of two numbers 

function addition(number1 ,number2){
    sum = number1 + number2
    console.log("The sum of the numbers is: ", sum)
}

addition(45, 60)
//ccalculate the area of a triangle whose base is 20 cm and height 12 by use of function parameters

function area(base, height){
    area = 0.5 * base * height;
    return area;
}
product = area(20, 12)
console.log("The area of the triangle is:", product,"cm\u00B2")
//method 2
function area(base,height){
    result=base*height/2;
    console.log("the area is",result,"cm\u00B2")
  }
  area(12,20)
  area(7,24)

// find the simple interest given principal 50000 rate as 5% and time as 8 yrs

function simpleinterest(principal, rate, time){
    result = (principal * rate * time) / 100;
    console.log("The simple interest is", result);
}
simpleinterest(50000, 5, 8);