class person {

    name: string;
    age: number;

    constructor(name?: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(this.name + " , " + this.age);
    }
}

let p1: person = new person("Siraj", 40);
p1.info();
