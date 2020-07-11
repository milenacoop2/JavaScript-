//Redeclaration is not allowed in the same scope
//If you try to use a let variable before declaration, you'll get a Reference Error, because they are not hoisted
//It's block scoped: it is known and defined only inside the block, so it's out of scope any place outside the block it is declared
//The block is defined by the squiggly brackets {}, everything inside it is part of the block
function example() {
    console.log('Calling c here will result in an error');
    {
      let c = 'yummy';
      c = c + ' ' + 'cookie';
      console.log(c);
    }
    console.log('Calling c here will also result in an error');
  }
example()
//The c variable is not know outside the block so if you call them outside it will result in an error

let sugar = 'cookies';
console.log(sugar);
sugar = 'more cookies';
console.log(sugar);
//Right way of changing a value using let, you update it, not redeclare it

console.log(rightwayofusinglet = 'let variables can be updated, like this: sugar = 20');
console.log(wrongwayofusinglet = 'let variables cannot be redeclared, like this, otherwise, an error will be returned: let sugar = other value');

let sweets = 'Chocookie';
    if (true) {
        let sweets = 'Vanilla cookie :(';
        console.log(sweets); 
    }
console.log(sweets); 
//This way you don't change thhe initial value inside sweets, like it would happen if you use var