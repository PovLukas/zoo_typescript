class Animal {
    name: string;
    age: number;
    
    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    makeSound(sound: string) {
        console.log(sound)
    }


}


interface SleepAndWalk {
    sleep():void;
    walk():void;
}

interface JumpAndRun {
    jump():void;
    run():void;
}

interface SwimAndHunt {
    swim():void;
    hunt():void
}


class Zebra extends Animal {
    maxSpeed: number;
    origin: string;

    constructor(maxSpeed: number, origin: string, name: string, age: number) {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
}

class Elephant extends Animal {
    weight: number;

    constructor(weight: number, name: string, age: number) {
        super(name, age);
        this.weight = weight
    }
}

class Tiger extends Animal {
    wasOutsideIn8Hours: boolean;

    constructor(wasOutsideIn8Hours: boolean, name: string, age: number) {
        super(name, age);
        this.wasOutsideIn8Hours = wasOutsideIn8Hours
    }
}