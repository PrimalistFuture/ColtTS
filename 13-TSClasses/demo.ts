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
        private _score: number = 0,
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