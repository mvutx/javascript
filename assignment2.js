let distance  = 350
let amount 
if (distance >= 0 && distance <= 100){
    amount = 5
}
else if (distance >= 101 && distance <= 500){
    amount = 10
}
else if (distance >= 501 && distance <= 1000){
    amount = 20
}
else if (distance >= 1001){
    amount = 40
}
else {
    console.log("Invalid distance entered")
}
console.log("The distance travelled is:", distance)
console.log("the amount is:",amount, "USDollars")
console.log(typeof(distance))
console.log(typeof(amount))
