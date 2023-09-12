// Variables
let vaughn: string = 'was cool';

// lets us reassign to another string
vaughn = 'still cool';

// but won't let us reassign to another type
vaughn = false;

// knows which methods are available on the specified type
vaughn.toUpperCase();

// and which are not
vaughn.upper();

// same thing with booleans and numbers. You could imagine changing these to be strings would be confusing and could cause errors in JS. TypeScript gets mad.
let bool: boolean = false;
// big mad
bool = 'false';

let aNumber: number = 15;
// bigly madly
aNumber = '15';



// Type Inferance
let x = 27;
// madge
x = 'Twenty-Seven'

// any
let stopBuggingMe: any = 'This is getting weird'
// TS doesn't get mad
stopBuggingMe = 15;
stopBuggingMe = false;

// Delayed Initialization and Implicit Any
const movies = ['Raiders of the Lost Ark', 'Temple of Doom', 'Last Crusade', 'Kingdom of the Crystal Skull', 'Dial of Destiny']

// lets say we don't know if the movie we are looking for is in our array. When we declare it, we aren't sure then if the type will be a string, undefined or whatever else, so the any can be useful.
let foundMovie;

for (let movie of movies) {
  if (movie === 'Last Crusade') {
    foundMovie = movie;
  }
}

// but we could also instead guess what type it should be
let movieTitle: string;