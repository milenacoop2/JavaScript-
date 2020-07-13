//Functions must have parameters and in most cases, a return
//They can be declared with a name, like "function namehere(parameter1,parameter2)" or whitout a name(anonymous), like "function(parameter)"
//A function with no name will be called just at the time it is being writted, to save it, you need to store it in a variable

function square(number){
    return console.log(number*number)
};
square(3);
//Prints 9

function square(number){
    const x = number*number;
    const y = console.log(x);
    return y;
}
square(4);
//Prints 16

const square2 = function(number) {
    const result = number * number
    console.log(result)
    return result
};
const x = square2(5); 
//Prints 25

const square3 = function(number) {
    const m = number * number;
    console.log(m);
    return m;
}
const y = square3(6);
//Prints 36

let index = 3;
makearray(index);
function makearray(i){
    const ks = [];
    for (let d = 0; d < 5; d++){
      i *= 3; 
      ks.push(i);       
    }
    console.log(ks);    
    return ks
}
//Prints the array [9, 27, 81, 243, 729]

function factorialize(num){
    if (num < 0)  return -1;
    console.log('First one');    
    if (num == 0) return 1;
    console.log('Second one');
    return (num * factorialize(num - 1));
}
console.log(factorialize(-1));
//Prints 120 (factorial of 5)

const factorialize2 = function(number) {
    if (typeof number !== 'number') throw 'Function needs to receive number' 
    if (number !== 0 && number !== 1) {
        return (number * factorialize(number - 1));
    }
}
const factresult = factorialize2(4);
console.log(factresult) 
//Prints 24 (factorial of 4)

const factorialize3 = (number) => {
    if (typeof number !== 'number') throw 'Number instead'
    if (number !== 0 && number !== 1) {
        return (number * factorialize(number - 1));
    }
}
