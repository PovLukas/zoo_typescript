"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound(sound) {
        console.log(sound);
    }
}
class Zebra extends Animal {
    constructor(maxSpeed, origin, name, age) {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
}
class Elephant extends Animal {
    constructor(weight, name, age) {
        super(name, age);
        this.weight = weight;
    }
}
class Tiger extends Animal {
    constructor(wasOutsideIn8Hours, name, age) {
        super(name, age);
        this.wasOutsideIn8Hours = wasOutsideIn8Hours;
    }
}
