// const arr = ["Red", "Apple", "Tomato"];
// const [color, , veg] = arr;

// console.log(veg);

// function calculate(a, b){
//     const add = a+b;
//     const sub = a-b;
//     const mul = a*b;
//     const div = a/b;

//     return [add, sub, mul, div];
// }

// const [add, sub, mul, div] = calculate(10, 20);

// console.log(mul);



const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registraition : {
        city : "Raisen",
        state : "MP"
    }
}

function vehicle({model:mod, brand, color, type, registraition:{city}}){
    console.log("my " + type + " model is " + color+ " " + mod + " " + brand + ". I have bought from " + city);
}
  
vehicle(vehicleOne);