class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is ${this.age} old`);
    }

}

class SpecialPerson extends Person {
    constructor (name, age, type, contry) {
        super(name, age,);
        this.type = type;
        this.contry = contry;
    }
    eat() {
        super.eat();
        console.log(`${this.name} is eating ${this.contry} food`);
    }
}

let soumik = new SpecialPerson("Soumik", 19, 'Programmer', 'Bangladesi');
soumik.eat();





// what is polymorphisom?
// => polymorphisom is a way to chnage perant class property from child class property!