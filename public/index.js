"use strict";
const animalName = document.getElementById("animal-name");
const animalAge = document.getElementById("animal-age");
const animalButton = document.getElementById("animal-submit-button");
const employeeAtZoo = document.getElementById("employee-location");
const employeeSafety = document.getElementById("employee-safety");
const employeeButton = document.getElementById("employee-submit-button");
const listOfEmployees = document.getElementById("employee-list");
const listOfAnimals = document.getElementById("animal-list");
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.createdDate = new Date();
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
        this.createdDate = new Date();
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
console.log(zoo.animalList);
employeeButton === null || employeeButton === void 0 ? void 0 : employeeButton.addEventListener("click", () => {
    const newEmployee = new Zookeeper(employeeAtZoo === null || employeeAtZoo === void 0 ? void 0 : employeeAtZoo.checked, employeeSafety === null || employeeSafety === void 0 ? void 0 : employeeSafety.value);
    employeeList.addEmployee(newEmployee);
});
animalButton.addEventListener("click", () => {
    const newAnimal = new Animal(animalName.value, parseInt(animalAge.value));
    zoo.addAnimal(newAnimal);
});
listOfAnimals.addEventListener("click", () => {
    console.log(zoo.animalList);
});
listOfEmployees.addEventListener("click", () => {
    console.log(employeeList.employeeList);
});
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log() {
    }
}
