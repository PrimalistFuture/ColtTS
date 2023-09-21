// Type Narrowing

// typeof
// This won't work without the conditional, because TS knows we can't multiply a string * 3.
// We need the conditional to handle the variety of types our func can take in
function tripleInt(value: number | string): number {
    if (typeof value === "string") {
        value = parseInt(value);
    }
    return value * 3;
}

// truthiness type guard
const printLetters = (word: string | null) => {
    if (!word) {
        console.log('No word was provided');
    } else {
        loopString(word);
    }
}
// I had to write this stupid little looping function because TS wouldn't let me split the word parameter above because it had to be a string, not an array.
// ***** OKAY I DIDN'T ACTUALLY HAVE TO DO THIS. I COULD HAVE LOOPED THROUGH THE WORD JUST FINE, BUT ITS BASICALLY THE SAME THING.
function loopString(str: string): void {
    let counter = 0;
    while (counter < str.length) {
        console.log(str[counter]);
        counter++;
    }
}


// Equality Narrowing
const someFunc = (x: string | boolean, y: string | number) => {
    // the only way this happens if they are both the same type and value
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x);
        console.log(y);
    }
}


// Type Narrowing with the IN Operator
// These two type alias each have a property which is function that returns nothing
type Cat = {
    meow: () => void
}
type Dog = {
    bark: () => void
}
// talk is an arrow function which takes in an object of either the custom type Cat or Dog, and if calls the appropriate function
// this way we can determine what type of object our function was given
const talk = (creature: Cat | Dog) => {
    if ('meow' in creature) {
        console.log(creature.meow());
    } else {
        console.log(creature.bark())
    }
}

const pep: Cat = { meow: () => 'Mmmmeow?' };
talk(pep);