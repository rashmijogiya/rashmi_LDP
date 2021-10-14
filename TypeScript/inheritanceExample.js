var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getHobbies = function () {
        console.log(this.name + "'s hobby is reading");
    };
    return Person;
}());
var pr = new Person("Rashmi");
pr.getHobbies();
var Cook = /** @class */ (function (_super) {
    __extends(Cook, _super);
    function Cook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cook.prototype.getHobbies = function () {
        console.log(this.name + "'s hobby is cooking");
    };
    return Cook;
}(Person));
var pr1 = new Cook("Sonu");
pr1.getHobbies();
