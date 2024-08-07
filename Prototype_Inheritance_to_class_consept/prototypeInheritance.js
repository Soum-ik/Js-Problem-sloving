function Person(name, age) {
    this.name = name;
    this.age = age;
}

// include person prototype start
Person.prototype = {
    eat: function () {
        console.log(`${this.name} is ${this.age} old`);
    }
};
// include person prototype end



function PersonActivitys(name, age, type, brand) {
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.brand = brand;
}


PersonActivitys.prototype = Object.create(Person.prototype);
PersonActivitys.prototype.constructor = PersonActivitys;
PersonActivitys.prototype.play = () => {
    console.log(`${this.name} is ower of ${this.brand} brand!`);
};

const soumik = new PersonActivitys("Soumik", 19, "Stack", "Stack");
console.log(soumik);

soumik.eat();
soumik.play();