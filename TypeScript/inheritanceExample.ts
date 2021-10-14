class Person {
    name: String;
    constructor(name: String) {
        this.name = name;
    }

    getHobbies() {
        console.log(this.name + "'s hobby is reading !!");
    }
}
let pr = new Person("Rashmi");
pr.getHobbies();

class Cook extends Person {

    getHobbies() {
        console.log(this.name + "'s hobby is cooking !!");
    }

}
let pr1 = new Cook("Sonu");
pr1.getHobbies();