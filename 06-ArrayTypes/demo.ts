// Array Types

// syntax for only one type
let names: string[] = ['hello', 'world'];
let bools: boolean[] = [true, false];
// any
let stuff = []

// can change items same way as normal
names[0] = 'Vaughn';
// but not to different type
names[1] = 12;

// alternate syntax
let cats: Array<string> = ['Pepper', 'Lulu', 'Henry'];

// empty array type... so useful wow
let empty: [] = [];
// has to be empty or TS is mad at us
empty.push('whySoMad?');

// custom types
type Point = {
    x: number,
    y: number
};
// points is an array of the Point type
let points: Point[] = [{ x: 12, y: 1 }, { x: 3, y: '2' }]


// Multidimensional Arrays
// array of arrays of point types
let coords: Point[][] = [[{ x: 1, y: 2 }, { x: 3, y: 1 }], [{ x: 2, y: 0 }]]
// mad because not a number in the last nested array
let nested: number[][] = [[1, 1, 2, 3], [2, 3], [0], ['a']];