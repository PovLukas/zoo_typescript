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
class Employee {
    enterZoo() {
        console.log("Employee inside");
    }
    leaveZoo() {
        console.log("Employee left");
    }
    takeSafetyTrainings() {
    }
    constructor(isEmployeeAtZoo, safetyTrainingCompletionDate) {
        this.isEmployeeAtZoo = isEmployeeAtZoo;
        this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
    }
}
const whenFed = [];
class Zookeeper extends Employee {
    feedTheAnimal(animal) {
        const date = new Date();
        console.log(`${animal} was fed ${date}`);
        whenFed.push({ animal, dateFed: date });
    }
    whenAnimalsWereFed() {
        whenFed.forEach(e => {
            console.log(`${e.animal} was fed ${e.dateFed}`);
        });
    }
}
class Animals {
    constructor() {
        this.animalList = [];
    }
    addAnimal(animal) {
        this.animalList.push(animal);
    }
    listAnimals() {
        this.animalList.forEach(animal => {
            console.log(`Name: ${animal.name}, Age: ${animal.age}`);
        });
    }
}
const zoo = new Animals();
const tiger = new Tiger(true, "Margis", 24);
zoo.addAnimal(tiger);
class Employees {
    constructor() {
        this.employeeList = [];
    }
    addEmployee(employee) {
        this.employeeList.push(employee);
    }
    listEmployees() {
        this.employeeList.forEach(employee => {
            console.log(`Name: ${employee.isEmployeeAtZoo}, Age: ${employee.safetyTrainingCompletionDate}`);
        });
    }
}
const employeeList = new Employees();
const employee = new Zookeeper(true, "Balandzio 14");
employeeList.addEmployee(employee);
