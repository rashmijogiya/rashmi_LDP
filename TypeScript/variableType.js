var n = 1;
n = 22;
console.log(n);
var str = "Hello ";
str = " World";
console.log(str);
var isActive = true;
console.log(isActive);
var names = ["Rashmi", "Daksh", "John"]; // Using String[] allows only string type of element in array
console.log(names);
var anyArray = [123, "Rashmi", true, "123"]; // Using any we can create array of any type of element in it.
console.log(anyArray);
var Animal;
(function (Animal) {
    Animal[Animal["persian"] = 0] = "persian";
    Animal[Animal["siamese"] = 1] = "siamese";
})(Animal || (Animal = {}));
; // enum is another kind of variable decelaration method
var cat = Animal.siamese;
console.log(cat);
