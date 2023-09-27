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
const talk = (creature: Cat | Dog): void => {
    if ('meow' in creature) {
        console.log(creature.meow());
    } else {
        console.log(creature.bark())
    }
}

const pep: Cat = { meow: () => 'Mmmmeow?' };
talk(pep);


// instanceof Narrowing
const printFullDate = (date: Date | string): string => {
    if (date instanceof Date) {
        return date.toUTCString();
    } else {
        return new Date(date).toUTCString();
    }
}

class User {
    constructor(public name: string) {}
}

class Company {
    constructor(public name: string) {}
}
// Because both of these classes above have a name property, I should use instanceof rather than in narrowing.
function printName(entity: User | Company) {
    if (entity instanceof User) {
        console.log(`I am a user instance!`)
    } else {
        console.log(`I am a company instance!`)
    }
}


// Type Predicates

interface Bird {
    name: string,
    chirp: string,
}
interface Hawk {
    name: string,
    eggColor: string,
}

// if the passed in animal has the chirp property, it will return true. Otherwise false
// The return type is the predicate, and it must be this format
function isBird(animal: Bird | Hawk): animal is Bird {
    return (animal as Bird).chirp !== undefined;
}

function makeNoise(animal: Bird | Hawk) {
    // Below is trying to narrow the type, but TS doesn't know that just yet.
    if (isBird(animal)) {
        // If we delete the predicate in isBird, TS doesn't know what animal is
        // But now it does if we mouse over it
        console.log(animal);
        return `ChirpChirp`
    } else {
        // and TS knows here too.
        console.log(animal);
        return `maCaaaaw`
    }
}


// Discrimated Unions

// This is different than Cat and Dog or Bird and Hawk above because those had different properties than each other, so we could check that property to tell the difference between them.
// So we add the kind property to each interface which is a literal type - not a string
// The interfaces don't need to have all of the properties in common, but it is a common reason to use these discriminated unions.

interface Rooster {
    name: string,
    weight: number,
    age: number,
    kind: "rooster",
}

interface Cow {
    name: string,
    weight: number,
    age: number,
    kind: "cow",
}

interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig",
}
// added to demonstrate exhaustiveness checking
interface Sheep {
    name: string,
    weight: number,
    age: number,
    kind: "sheep",
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;
// Checks the .kind property to evaluate the type and return an appropriate animal sound
function getFarmAnimalSound(animal: FarmAnimal): string {
    switch(animal.kind){
        case 'pig':
            // hover this: here TS knows that animal is of type Pig
            console.log(animal);
            return `Oink!`;
        case "cow":
            console.log(animal);
            return `Mooo!`;
        case "rooster":
            console.log(animal);
            return `Cockadoodledoo!`;
        // comment in this code to fix the error in the default
        // case "sheep":
        //     console.log(animal);
        //     return `Baaah!`
        default:
            // Exhaustiveness Checking with Never
            // We should never make it here, if we handled all of the cases correctly
            // never type
            // We are not handling this right because the case in which kind is 'sheep' isn't accounted for.
            const _exhaustiveCheck: never = animal;
            return 'Should never see this';
    }
}
// TS will predictably get mad if we don't have all of these properties, even the kind which mostly just serves to help us tell what interface it is
const stevie: Rooster = {
    name: `Stevie Chicks`,
    weight: 2,
    age: 1.5,
    kind: 'rooster',
}