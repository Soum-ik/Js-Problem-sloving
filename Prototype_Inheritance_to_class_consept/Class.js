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
        super(name, age);
        this.type = type;
        this.contry = contry;
    }
}


let soumik = new SpecialPerson("Soumik", 19, 'Programmer', 'Bangladesi');
soumik.eat()