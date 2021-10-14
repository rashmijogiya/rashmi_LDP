function getName(str) {
    console.log(str.name);
}
getName({ name: "Rashmi" });
getName({ label: "123" });
function getName1(str) {
    console.log(str.name);
}
getName1({ name: "Rashmi" });
// getName1({label:"123"});  
//  Now when we complie this we get an error "Argument of type '{ label: string; }' is not assignable to parameter of type 'CustomerName'.
//   Object literal may only specify known properties, and 'label' does not exist in type 'CustomerName'."
getName1({ name: "Rashmi" });
getName1({ name: "John" });
