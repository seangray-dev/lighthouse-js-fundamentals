/* 
Challenge

Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year

The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.

*/

function ageCalculator(name, yearOfBirth, currentYear) {
  const currentAge = currentYear - yearOfBirth;
  return `${name} is ${currentAge} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2023));
console.log(ageCalculator("Ferdinand", 1988, 2023));
console.log(ageCalculator("Sean", 1995, 2023));
