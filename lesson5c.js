// Exporting  modules
// we export modules so that we can use/utilise them in other files

export const calculator = (x, y) =>{
    let difference = x - y
    console.log("The difference of the two numbers is:", difference)
}

export const simpleinterest = (principle, rate, time) =>{
    let si = (principle * rate * time) / 100
    console.log("This is the simple interest gained:" , si)
};
export const bmi = (weight, height) =>{
    const BMI = weight / (height * height);
    console.log("this is the BMI:", BMI, "kg/m\u00b2")
};
