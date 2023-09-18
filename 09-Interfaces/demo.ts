// Interface

// custom type alias syntax
type Dude = {
    name: string,
    age: number,
}

type Color = number[];

// interface syntax for objects only
// optional nickname
interface Person {
    readonly id: number,
    name: string,
    age: string,
    nickname?: string,
    // our Person interface includes a method that takes in zero parameters and returns a string.
    sayHi: () => string;
    // same thing with different syntax for defining the method.
    sayBye(): string,
};

const sayHappyBirthday = (person: Person): string => {
    return `Hey ${person.name}, congrats on turing ${person.age}!`;
}
// 
sayHappyBirthday({ id: 123134, name: 'Jerry', age: '10', sayHi: () => 'Hello!', sayBye() { return `Bye!` } })


interface Product {
    name: string,
    price: number,
    // our method applyDiscount takes in a number parameter called discount and returns a number
    applyDiscount(discout: number): number;
}

const shoes: Product = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(discount: number) {
        const newPrice = this.price * (1 - discount);
        return newPrice;
    }
}

// Interface 'Reopening'
// original interface
interface Triangle {
    color: string,
    size: number,
    angles: number[];
    printAngles(): string,
};

// doesn't overwrite the original triangle interface, just adds on a new property.
interface Triangle {
    isRight: boolean,
};
// here is our fulling built Triangle interface, with the properties from the first initial interface, and the reopening of it.
let pascalsTri: Triangle = {
    color: 'black',
    size: 10,
    angles: [3, 4, 5],
    isRight: true,
    printAngles() {
        return `${this.angles}`
    }
}


// Similarly, we can extend an interface. SurferDude has everything Dude has, but with some extra properties.
interface SurferDude extends Dude {
    // union literal type. favBeach must be one of:
    favBeach: 'Gold' | 'Utah' | 'Omaha' | 'Sword' | 'Juno',
    timesSaidDude: number,
}
// chet has both the dude (definied at the top) and the surfer dude properties.
const chet: SurferDude = {
    name: 'chet-brah',
    age: 51,
    favBeach: 'Gold',
    timesSaidDude: 45021,
}

// multiple extension interface example
interface Engineer extends Triangle, Dude {
    // i am not actually building this. But I could. It would be everything a triangle is, dude is, and whatever it is that an engineer is unique to.
}