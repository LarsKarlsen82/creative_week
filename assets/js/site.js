// Objekt orienteret programmering: 


// // Alle objekter skal have en constructor-metode

// class TestObject {
//     constructor(msg) {
//         // Constructor-metoden initialiserer objektet med en besked og udskriver den til konsollen
//         this.message = msg;
//         console.log(this.message);

//                 console.log('Hello' + msg);
//         // this.message=msg;
//     }
// }

// // Opretter tre instanser af TestObject-klassen med forskellige beskeder
// const myObject = new TestObject(' objekt 1');
// const myObject2 = new TestObject(' objekt 2');
// const myObject3 = new TestObject(' objekt 3');

// // Ændrer beskeden for nogle af objekterne
// myObject2.message = 'ny besked';
// myObject.message = 'X mas';
// myObject3.message = 'X mas is near!!';

// // Udskriver beskederne til konsollen for at tjekke ændringerne
// console.info(myObject2);
// console.log(myObject2.message);
// console.log(myObject.message);

// // Udskriver hele objektet myObject3 og beskeden separat for at tjekke outputtet
// console.log(myObject3);
// console.log(myObject3.message);

// ------------------------------------------------------------------


// class Car {
//     constructor(make, model, year, condition) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.condition = condition;
//     }

//     getInfo() {
//         return`Jeg er en ${this.make}, model: ${this.model} fra ${this.year}. Jeg er i ${this.condition} stand.`;
//     }
//     getSummary() {
//         return `${this.make} ${this.model}, Year:${this.year}`;
//     }
// }


// const myObject = new Car('volvo', 'v40', 2001, 'fin');
// const myObject2 = new Car('nissan', 'z82', 2021, 'lorte');

// // Kald getInfo-metoden for at vise informationen i browserens konsol
// console.log(myObject.getInfo());
// console.log(myObject.getSummary());
// console.log(myObject2.getInfo());

// ------------------------------------------------------------------

class Car {
    constructor(make, model, year, condition, imageFileName) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.condition = condition;
        this.imageSrc = `assets/img/${imageFileName}`;
    }

    getInfo() {
        return `Jeg er en ${this.make}, model: ${this.model} fra ${this.year}. Jeg er i ${this.condition} stand.`;
    }

    getSummary() {
        return `${this.make} ${this.model}, Year: ${this.year}`;
    }

    getImageSrc() {
        return this.imageSrc;
    }
}

const myCars = [];

myCars.push(new Car('volvo', 'v40', 2001, 'fin', 'volvo.jpg'));
myCars.push(new Car('nissan', 'z40', 2021, 'lorte', 'nissan_wrecked.jpg'));

// Modify the make of the first car using =
myCars[0].make = 'john deere';

// Display the updated information and image source for the first car
console.log(myCars[0].getInfo());
console.log(myCars[0].getImageSrc());
