class Person {
    name = "";
    age;
    print = () => console.log(`${this.name} - ${this.age}`);

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Professional extends Person{
    profession = "";
    workload = 0;
    print = () => console.log(`${this.name} - ${this.age} - ${this.profession} = ${this.workload}`);


    constructor(name, age, profession, workload) {
        super(name, age);
        this.profession = profession;
        this.workload = workload;
    }
}

const professional = new Professional('Test', 55, 'Ferreiro', 40);

professional.print();
