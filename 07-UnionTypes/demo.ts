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
    return `Waldo is at ${place.x}, ${place.y}, ${place.city}`
}