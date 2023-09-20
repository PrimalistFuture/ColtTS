// TS Classes

class Player {
    // we have to declare to TS what type the properties will be
    // We are making these readonly meaning they can't be changed. Can't do this in JS.
    // Public is the default and not needed
    public readonly first: string;
    public readonly last: string;
    // here is that special syntax of creating a property on the class outside of the constructor
    // the private keyword gives TS protection before the code is compiled.
    private score: number = 0;
    // The # is JS that prevents access even after TS is compiled
    #id: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void {
        console.log("SECRET METHOD!!");
    }
}

let pepper = new Player("Pepper", "the Cat");


// Parameter Properties shorthand
class ParamPlayer {

    constructor(
        public first: string,
        public last: string,
        // protected keyword is like private, but lets us access in child classes
        protected _score: number = 0,
    ) { }

    private secretMethod(): void {
        console.log("SECRET METHOD!!");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be less than 0");
        }
        this._score = newScore;
    }
}

let lulu = new ParamPlayer('Lulu', 'Baby');

// Uses the protected _score from ParamPlayer
class SuperPlayer extends ParamPlayer {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 9999999;
    }
}


// Interface and Classes
interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    // uses Parameter properties shorthand to take in a color
    constructor(public color: string) { }
}
const bike1 = new Bike('red');

// implements two entirely different interfaces.
class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) { }

    print() {
        console.log(`${this.brand} ${this.color}`)
    }
}

const jacket1 = new Jacket('Speedo', 'blue');


// Abstract Class
abstract class Employee {
    constructor(public first: string, public last: string) { }
    // abstract on a method means that any subclass must have a method with that name.
    abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        // super passes first and last back to employee to construct
        super(first, last);
    }
    // TS would be mad if we didn't have this method
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        first: string,
        last: string,
        private hourlyRate: number,
        private hoursWorked: number
    ) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

// cannot create an instance of the employee class
const emp1 = new Employee()
// can still create instances of classes that extends from an abstract class
const betty = new FullTimeEmployee("Betty", "White", 950);
console.log(betty.getPay())

const bill = new PartTimeEmployee("Bill", "SonofBill", 2, 10);