//Functions must have parameters and in most cases, a return
//They can be declared with a name, like "function namehere(parameter1,parameter2)" or whitout a name, like "function(parameter)"
//A function with no name will be called just at the time it is being writted, to save it, you need to store it in a variable

function square(number){return console.log(number*number)};
square(3);
//Prints 9

function square(number){
    const x = number*number;
    const y = console.log(x);
    return y;
}
square(4);
//Prints 16

const square2 = function(number) {return console.log(number*number)};
const x = square2(5); 
//Prints 25

const square3 = function(number) {
    m = number*number;
    n = console.log(m);
    return n;
}
const y = square3(6);
//Prints 36

function makearray(i){
    let ks = [];
    for (d = 0; d < 5; d++){
      i *= 3; 
      ks.push(i);     
}
console.log(ks);    
}
makearray(3);
//Prints the array [9, 27, 81, 243, 729]

function factorialize(num){
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {return (num * factorialize(num - 1));}
}
console.log(factorialize(5));
//Prints 120 (factorial of 5)

const factorialize2 = function(number) {if (number != 0 & number != 1) {return (number * factorialize(number - 1));090o}}
const factresult = console.log(factorialize2(4));
//Prints 24 (factorial of 4)


