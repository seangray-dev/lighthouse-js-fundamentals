const isEven = function (num) {
  return num % 2 === 0;
};

// isEven takes a number as its parameter and returns a boolean value representing whether or not the number is even.

// In the above isEven function, num can vary and therfore so will the result of num % 2 === 0. If num is even, the result of num % 2 is 0 and so the whole expression evaluates to true. THe opposite happens when num is odd.

// After eveluating the expression to true or false, the function returns this value where it's called.

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
