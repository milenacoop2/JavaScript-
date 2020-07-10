const x = {candy:'chocolate'};
console.log(x.candy);
 // Prints chocolate 
const y = {food:{healthy:{fitness:{caloric:'banana'}}}};
console.log(y.food.healthy.fitness.caloric);
// Prints banana
const z = {adultswim:['Rick','Morty','Jerry','Summer','Beth','Jessica']};
console.log(z.adultswim[0]);
//Prints Rick
console.log(z.adultswim[0],'&',z.adultswim[1]);
//Prints Rick & Morty
const w = {food:{sugar:{candy:['chocolate','cookie','vanilla']}}}
console.log(w.food.sugar.candy[1]);
//Prints cookie
const k = {
    candy:['pie','cookie','chocolate'],
    food:['pizza','sushi'],
    sugar:['bubblegum','lollipop'],
};
console.log(k.sugar);
//Prints the whole array ['bubblegum','lollipop']
console.log(k["candy"]);
//Prins the whole array ['pie','cookie','chocolate']
console.log(k.food[1]); 
//Prints sushi
console.log(k.candy[1]);
//Prints cookie