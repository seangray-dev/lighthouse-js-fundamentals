const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
let ingredient = 0;
while (ingredient < ingredients.length) {
  console.log(ingredients[ingredient]);
  ingredient++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let j = 0;
while (j < ingredients.length) {
  ingredients.reverse();
  console.log(ingredients[j]);
  j++;
}
