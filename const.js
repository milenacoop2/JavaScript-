//Redeclarating and updating values are not allowed
//Maintain constant values
//If you try to use a const variable before declaration, you'll get a Reference Error, because they are not hoisted
//It's block scoped: it is known and defined only inside the block, so it's out of scope any place outside the block it is declared

function example() {
    {
      const p = 'yummy';
      console.log('value of variable inside the block: ', p)
    }
}
example()
//You can't do "p = p + ' ' + 'strawberry pie';" or "const p = anothervalue"
//You also can't call const outside the block, because it will return an error