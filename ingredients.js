var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var j = 0;
while (j < ingredients.length) {
  console.log(ingredients[j]);
  j++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for (var x = ingredients.length-1; x>=0; x--) {
  console.log(ingredients[x]);
}