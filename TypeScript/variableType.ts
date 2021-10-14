let n : Number=1;
n=22;
console.log(n);


let str: String= "Hello ";
str=" World";
console.log(str);

let isActive: boolean= true;
console.log(isActive);

let names: String[]= ["Rashmi", "Daksh", "John"]; // Using String[] allows only string type of element in array
console.log(names);

let anyArray: any[]=[123, "Rashmi", true, "123"]; // Using any we can create array of any type of element in it.
console.log(anyArray);

enum Animal {persian, siamese};  // enum is another kind of variable decelaration method
let cat: Animal= Animal.siamese;
console.log(cat);
