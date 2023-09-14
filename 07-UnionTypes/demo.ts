// Union Types

// syntax
const guessAge = (age: number | string) => {
    return "Your age is: " + age;
}
// TS is not mad at us for either a number or a string
guessAge(30);
guessAge('20');
// is mad for anything else
guessAge(true);
guessAge(['30']);

// can union custom types
type Point = {
    x: number,
    y: number
}

type Loc = {
    city: string,
    country: string
}
// can assign to either point or loc
let place: Point | Loc = { x: 1, y: 2 };
// and reassign to either
place = { city: 'Dublin', country: 'Ireland' }

function findWaldo(place: Point | Loc): string {
    return `Waldo is at ${place}`
}

// TS realizes that because price might not be a number, the return line could be problematic.
function calcTax(price: number | string, tax: number): number {
    return price * tax;
}
// TS knows we have this logic handling the different possibilities.
function calcTaxWithNarrowing(price: number | string, tax: number): number {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}


// Unions with Arrays
const stuffArr: (number | string)[] = [1, 2, 3, "4"];
// with custom types
const coords: (Point | Loc)[] = [{ x: 1, y: 2 }, { city: 'San Ramon', country: 'US' }]


// Literal Types

// will accept any of the literals in the union
const giveAnswer = (age: 'yes' | 'no' | 'maybe') => {
    return `The answer is ${age}.`;
}
giveAnswer('no');
giveAnswer('idk lol xd');

// This looks strange, but what we are saying is that the only allowable type for zero to be, is 0
let zero: 0 = 0;
zero = 0;
zero = 1;
zero = 'zero';

// literal with custom type and union
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

let today: DayOfWeek = 'Monday';
today = 'Venusday';