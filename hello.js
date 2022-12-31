const sayHello = function (name) {
  console.log("Hello " + name);
};

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

// return & console.log
// A console.log statement will result in some content being displayed in the console. A return statement will not output anuything to the console. However, when a function returns a value, we can still console.log it later

// the first function immediately outputs 'Hello John' to the console.

const sayHelloToConsole = function (name) {
  console.log("Hello " + name);
};

sayHelloToConsole("John");

// The second returns the string 'Hello, John' to a variable and nothing will get output to the console.

const returnSayHello = function (name) {
  return "Hello " + name;
};

const greeting = returnSayHello("John");
console.log(greeting);
