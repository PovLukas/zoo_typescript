const animalName = document.getElementById("animal-name") as HTMLInputElement
const animalAge = document.getElementById("animal-age") as HTMLInputElement
const animalButton = document.getElementById("animal-submit-button") as HTMLButtonElement

const employeeAtZoo = document.getElementById("employee-location") as HTMLInputElement
const employeeSafety = document.getElementById("employee-safety") as HTMLInputElement
const employeeButton = document.getElementById("employee-submit-button") as HTMLButtonElement

const listOfEmployees = document.getElementById("employee-list") as HTMLButtonElement
const listOfAnimals = document.getElementById("animal-list") as HTMLButtonElement



class Animal {
    name: string;
    age: number;
    createdDate: Date
    
    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
        this.createdDate = new Date()
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


abstract class Employee {
    enterZoo() {
        console.log("Employee inside")
    }
    leaveZoo() {
        console.log("Employee left")
    }
     takeSafetyTrainings():void {

     }

    isEmployeeAtZoo: boolean;
    safetyTrainingCompletionDate: string;
    createdDate: Date

    constructor(isEmployeeAtZoo: boolean, safetyTrainingCompletionDate: string ) {
        this.isEmployeeAtZoo = isEmployeeAtZoo;
        this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
        this.createdDate = new Date()
    }
}


const whenFed: { animal: string, dateFed: Date }[] = [];

class Zookeeper extends Employee {

    feedTheAnimal(animal: string) {
        const date = new Date()
        console.log(`${animal} was fed ${date}`)
        whenFed.push({animal, dateFed: date})
    }

    whenAnimalsWereFed() {
        whenFed.forEach(e => {
            console.log(`${e.animal} was fed ${e.dateFed}`)
        })
        }
    }



class Animals {
     animalList: Animal[] = []; 


    addAnimal(animal: Animal) {
        this.animalList.push(animal);
    }

    listAnimals() {
        this.animalList.forEach(animal => {
            console.log(`Name: ${animal.name}, Age: ${animal.age}`);
        });
    }
}

    const zoo = new Animals()

    const tiger = new Tiger(true, "Margis", 24)

    zoo.addAnimal(tiger)

    class Employees {
        employeeList: Employee[] = [];

            addEmployee(employee: Employee) {
        this.employeeList.push(employee);
    }

    listEmployees() {
        this.employeeList.forEach(employee => {
            console.log(`Name: ${employee.isEmployeeAtZoo}, Age: ${employee.safetyTrainingCompletionDate}`);
        });
    }
    }

    const employeeList = new Employees()

    const employee = new Zookeeper(true, "Balandzio 14")

    employeeList.addEmployee(employee)


    console.log(zoo.animalList)


    employeeButton?.addEventListener("click", () => {
        const newEmployee = new Zookeeper(employeeAtZoo?.checked, employeeSafety?.value)
        employeeList.addEmployee(newEmployee)
        
    })

    animalButton.addEventListener("click", () => {
        const newAnimal = new Animal(animalName.value, parseInt(animalAge.value))
        zoo.addAnimal(newAnimal)
        
    })


    listOfAnimals.addEventListener("click", () => {
        console.log(zoo.animalList)
    })

    listOfEmployees.addEventListener("click", () => {
        console.log(employeeList.employeeList)
    })


    class Logger {
        static instance: Logger;

        private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log() {
        
    }
    }