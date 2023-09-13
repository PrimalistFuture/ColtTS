// Object Types

// a function with an object type parameter
// What I am doing here is saying that the object I am passing in is called person. In order to access it, I need to do person.first. That is normal JS. But the TS wants me to tell it what type each property will be.
function printName(person: {first: string; last: string}): string {
  return `${person.first} ${person.last}`
}

printName({first: 'Will', last: 'Smith'});
// Notice TS is mad at us for passing in an excess property
printName({first: 'Vaughn', middle: 'Edward', last: 'Seekamp'})
// 'Name: Vaughn Seekamp'

// TS has no problem with this. Works exactly the same as it does in JS.
const me = {first: 'Vaughn', middle: 'Edward', last: 'Seekamp'};
printName(me);

const logName = (name: { first: string; last: string}): string => {
  return `Name: ${name.first} ${name.last}`
}

// POJO - no TS
function alertName({obj}) {
  console.warn(`${obj.first} ${obj.last}`);
}

// object annotation for variable
// the annotation follows the declaration, and the actual object is after the =
let coordinate: {x: number, y: number} = {x:21, y:2};

// object annotation for return types
// following the (): is the annotation for what we want to be returned
function randomCoordinate(): {x: number, y: number} {
  return {
    x: (Math.random() * 100),
    y: (Math.random() * 100)
  }
}



// Type Alias
// example
type Person = {
  name: string,
  age: number
};

// use the type alias in the annotation. TS knows what a Person type is, and enforces that - notice it is mad at age
const sayHappyBirthday = (person: Person): string => {
  return `Hey ${person.name}, congrats on turning ${age}!`;
};
// reusing the Person type
function yellAge(person: Person): string {
  return `WOW ${person.name} IS ${person.age}!!`
}

type Point = {
  x: number,
  y: number,
  // the ? makes it optional
  z?: number,
};
// its mad because it knows coord is a Point, and therefore needs an x and y. If you mouse over it, notice it is not mad about the lack of a z.
let coord: Point = {x: 2};

// using the type to annotate the return type. No z required because we made that optional.
function randCoord(): Point {
  return { x: Math.random(), y: Math.random() }
};
// takes in an object we are calling point which has a type of Point, and returns an object with a type of Point
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 }
}


// Nested Object

const describePerson = (person: {
  name: string,
  age: number,
  // same syntax, just nested
  parentNames: {
    mom: string,
    dad: string
  }
}): string => {
  return `Person: ${person.name},
  Age: ${person.age},
  parents: ${person.parentNames.mom}, ${person.parentNames.dad}.`;
};


type Song = {
  title: string,
  artist: string,
  numStreams: number,
  credits: {
    producer: string,
    writer: string
  };
};

const GLOBAL_PAYOUT_RATE: number = 0.0033;

function calcPayout(song: Song): number {
  return song.numStreams * GLOBAL_PAYOUT_RATE;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
};

// its mad because it knows that a Song type has a writer key in credits
const aSong: Song = {
  title: 'Battery',
  artist: 'Metallica',
  numStreams: 25247,
  credits: {
    producer: 'Me',
  }
}

// readonly
// example
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12888,
  username: 'catman'
}
// no problem accesing the id
console.log(user.id);
// it mad at us for trying to change it
user.id = 123132;


// Intersection Types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;
// contains everything a circle and colorful type does
const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
}

// can also be used to extend types
// has everything from Circle and Colorful and some new stuff.
type ColorfulCircleWithBorder = Circle & Colorful & {
  borderColor: string,
  borderSize: number
};