/* 
Challenge

Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of every even number from 0 to 100. In this challenge, we will build a function that creates an array like this for a given start, end, and step parameter.

The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.

*/

function range(start, end, step) {
  let result = [];

  if (
    start === undefined ||
    end === undefined ||
    step === undefined ||
    start >= end ||
    step <= 0
  ) {
    return result;
  }

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

console.log(range(0, 10, 2));
