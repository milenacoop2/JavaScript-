//You can mix integers, floats, strings inside a single array
//You can nest as much arrays as you want and access them by [0][0][0]...
const x = [1,0.5,-5,-0.3];
console.log(x[2]);
//Prints -5 
const a = 'Peanut Butter'
const y = ['Peanuts',1,0.5,-6,-0.0008,a];
console.log(y[5]);
//Prints the value in a (Peanut Butter)
const z = [['Food',['Pizza']],['Candy',['Cookie','Pie']]];
console.log(z[0][0]);
//Prints Food
console.log(z[1][0]);
//Prints Candy
console.log(z[0][1]);
//Prints the second value inside first array 1° value = Food 2° value = ['Pizza']
console.log(z[1][1]);
//Prints the second value inside second array 1° value = Candy 2° value = ['Cookie','Pie']
console.log(z[0][1][0]);
//Prints Pizza
console.log(z[1][1][0],'&',z[1][1][1]);
//Prints Cookie & Pie
