class Person {
    constructor(name) {
        this.name = name;
    }

    greetings = () => {
        console.log(`Hello my name is ${this.name}`);
    };

    age = age => {
        console.log(`My age is ${age} years old`);
    };
}

const miftah = new Person("miftah");

console.log(miftah.age(78));

class People extends Person {
    constructor(name, address) {
        super(name);
        this.address = address;
    }
}

const people = new People("Miftah", "Jakarta");
console.log(people);

console.log(people.greetings("Miftah faris"));
console.log(people.age(108));

