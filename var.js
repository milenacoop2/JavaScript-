//Redeclaration allowed, so redeclaring the same variable in same scope won't result in error
//They are hoisted, wich means their value goes to the top of their scope and is initialized with a value of undefined
//It's function scoped: the variable has scope along the entire function, even if not declared, it's undefined
//Can generate possible errors if you forgot a variable was declared inside the code and declare it again on another part of the code
var candy = 'Chocolate cookie'
//The var here is globaly scoped

function example() {
    console.log('value of variable here: ', p)
    {
      var p = 'yummy';
      p = p + ' ' + 'strawberry pie';
    }
    console.log('value of variable after the block: ', p)
}
example()
//The var here is function scoped
//The x variable is known (but undefined) above the block and it is known and defined after the block