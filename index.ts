type CanDo = SleepAndWalk | JumpAndRun | SwimAndHunt;




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

    constructor(isEmployeeAtZoo: boolean, safetyTrainingCompletionDate: string ) {
        this.isEmployeeAtZoo = isEmployeeAtZoo;
        this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
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