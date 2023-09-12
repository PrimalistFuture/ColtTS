// Function Parameter Typing
function square(num: number) {
  // mad because can't lowercase a number. TS knows.
  console.log(num.toLowerCase());
  return num * num;
}

// gross arrow function syntax.
let doSomething = (person: string, age: number, isFunny: boolean) => {}
// TS mad when you provide too many or too few arguments.
doSomething('Chicken', 15);

// Can also be done to parameters with default values
function greet(person: string = 'stranger') {
  return `Hi ${person}`;
}
greet();
// Hi stranger
greet('Vaughn')
// Hi Vaughn
greet(15)
// It mad, but will return: Hi 15

// Function Return Types
// The above examples have implicit return types,
// but below has an explicit return type
const addNums = (x: number, y: number): number => {
  return x + y;
}

// notice when you hover over the function name, it says that it could either return a number or a string
function flip(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

// Anonymous Functions
const numbers = [1,2,3,4];

numbers.map(num => {
  return num*2
});
// TS implicitly knows these should be numbers, and cant be uppered. Even though the type of num is never declared, it is not actually the any type.
numbers.forEach(num => {
  return num.toUpperCase()
});

// Void
const annoyVaughn = (num: number): void => {
  for (let i = 0; i < num; i++) {
    console.log(`HIIIIII`);
  }
};
// TS knows it should be void, but could be added too
function printTwice(msg: string) {
  console.log(msg);
  console.log(msg);
}

// Never
const neverStop = (): never => {
  while (true) {
    console.log(`I'm never going to stop`);
  }
};
// implicit never
const throwError = (msg: string) => {
  throw new Error(msg);
};



