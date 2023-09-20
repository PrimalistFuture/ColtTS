// Class
// example syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // example method on the class
    greet() {
        return `Hello ${this.name}!`
    }
}
// instantiation of that class
const jimmy = new Person("Jimmy", 25);
// calls the method found on this instance of that class.
jimmy.greet();

class Player {
    // this is a special syntax I don't think I have seen. Acts exactly the same as the this.#secret in the constructor - gives the numLives to every new instance of the class. These properties can't be dynamic like first and last.
    // The # makes this private. That is not part of the syntax or setting a property outside of the constructor.
    #score = 0;
    #numLives = 10;
    static description = "Player in our game";
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // private in constuctor
        this.#secret();
    }
    // can only be called on the Player class, not the instances.
    static randPlayer() {
        new Player('Andy', "Samberg");
    }
    taunt() {
        console.log('BOOYA');
    }
    loseLife() {
        return --this.#numLives;
    }
    checkLives() {
        return this.#numLives;
    }
    // private method - see what happens when you try and call it on an instance
    // I sort of thought i wouldn't be able to do this. Confusion
    #secret() {
        console.log('I am a secret');
    }
    // getter
    // fullName is not a real property, it is computed from first and last name.
    get fullName() {
        return `${this.first} ${this.last}.`
    }
    // becase #score is private, it can't be accessed outside of this getter method.
    get score() {
        return this.#score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score must be positive');
        }
        this.#score = newScore;
    }
}

const p1 = new Player('vaughn', 's');
p1.taunt();
p1.first // 'vaughn'
//Because we made numLives private, it can't be accessed.
p1.numLives

const p2 = new Player('charlie', 'b');
p2.taunt();

// Now adminplayer will have all of the properties and methods that Player itself does.
class AdminPlayer extends Player {
    constructor(first, last, powers) {
        // first and last will be intercepted by the base class
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;

}