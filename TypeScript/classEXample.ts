class Customer {
    name: String;
    age: Number;

    constructor() {
        this.name = "Rashmi";
        this.age = 30;
    }

    getAge(age: number) {
        console.log(age);
    }
}
let cust= new Customer();
cust.getAge(35);
console.log(" Name is "+ cust.name);