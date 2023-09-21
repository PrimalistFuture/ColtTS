// Generics
// syntax
function wrapInArray<T>(element: T): T[] {
    return [element];
}

// This is why generics can be useful: if we wanted to have our function take in multiple types, we would have to do this or the union type with a bunch of if typeof conditions.
function numberIdentity(item: number): number {
    return item;
}
function stringIdentity(item: string): string {
    return item;
}
function boolIdentity(item: boolean): boolean {
    return item;
}
// or we could do it with any, but then we lose the entire point of TypeScript
// and we lose the relationship between the input and output types
function anyIdentity(item: any): any {
    return item;
}

// generic
// We are telling the function it will be given an item of a certain type, and it will return that same type.
// Type could be called anything here, nothing special about the name. Much of the time it is just called T
function identity<Type>(item: Type): Type {
    return item;
}
// Here we are telling TS what type we are providing to our function, and it is expecting to give us that type back
identity<boolean>(true);
identity<string>('hi');
// We told it we are giving it a number, but we gave it a string
identity<number>('2');

interface Cat {
    name: string,
    color: string
}
// Can do this with a custom type interface as well
identity<Cat>({ name: 'Cat', color: 'black' })

// We can tell this function what type to expect, and it will expect the passed in array to have element of only that type, and it will return an element of that type
function getRandomElement<T>(array: T[]): T {
    let randIdx = Math.floor(Math.random() * array.length);
    return array[randIdx];
}

getRandomElement<string>(['1', '2', '4', '5', '6', '7'])
getRandomElement<number>([1, 2, 3, 4, 5, 6, 7, 8])
// done with an inferred type parameter --- TS is smart enough to know what type it should expect and return based on the parameter. I like being explicit because thats the whole point, but this is fine too.
getRandomElement([true, false])

// React TSX arrow function workaround - notice the trailing ,
const getRandomElementArrow = <T,>(list: T[]): T => {
    let randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

// generic with multiple type parameters
// U is conventionally used for the second type, V for the third and so on
// Don't have to provide the return type; TS will infer
function merge<T, U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}
// works great when we give it two objects
merge({ name: 'Vaughn' }, { pets: ['Pepper', 'Rascal', 'Betelgeuse'] });
// but we aren't actually telling TS that the params need to be objects
// spreading out a number won't result in an error, but its probably not what I intended or should allow.
merge({ name: 'Vaughn' }, 0);
// To do so, we need to say that it extends an object
// This is called Generic Constraints
// Return type explicity is the intersection of T & U.
function mergeObject<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return {
        ...obj1,
        ...obj2
    }
}
// still works for objects
mergeObject({ name: 'Vaughn' }, { pets: ['Pepper', 'Rascal', 'Betelgeuse'] });
// doesn't work for numbers and other unspreadable types
mergeObject({ name: 'Vaughn' }, 0);

interface Lengthy {
    length: number;
}
// Can be done with custom type interfaces or alias too
function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

// Setting a default value in a generic
// if no param is given, it will make an array that it expects to filled with numbers in this case
function makeEmptyArray<T = number>(): T[] {
    return [];
}

// Generic Classes
// We could add either a song or a video to our playlist without telling our add function which one, and it knows it should expect something of that type
interface Song {
    title: string,
    artist: string,
}
interface Video {
    title: string,
    creator: string,
    resolution: string
}

class Playlist<T> {
    public queue: T[] = [];

    add(element: T) {
        this.queue.push(element);
    }
}