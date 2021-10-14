var Customer = /** @class */ (function () {
    function Customer() {
        this.name = "Rashmi";
        this.age = 30;
    }
    Customer.prototype.getAge = function (age) {
        console.log(age);
    };
    return Customer;
}());
var cust = new Customer();
cust.getAge(35);
console.log(" Name is " + cust.name);
