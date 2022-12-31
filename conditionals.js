const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCiztizen = true;
const age = 26;

if (isCiztizen && age > 18) {
  console.log("you are eligible to vote");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isnt such a great idea...");
}

const raining = false;

if (!raining) {
  console.log("leave your umbrealla at home!");
}
