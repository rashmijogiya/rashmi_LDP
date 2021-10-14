function getName(str){
    console.log(str.name);
}
getName({name:"Rashmi"});
getName({label:"123"});  
// when we complie this code using typescript then we dont get any error
// But when we run this code using node js we get the output as 
//  Rashmi
// undefined
//  which is not the desired output and may lead to certain errors using this function.
// To avoid this we use Interface

interface CustomerName {
name: String;
age? : Number;  // when we use ? with argument it means that element is optiional.
}

function getName1(str: CustomerName){
    console.log(str.name);
}
getName1({name:"Rashmi"});
// getName1({label:"123"});  
//  Now when we complie this we get an error "Argument of type '{ label: string; }' is not assignable to parameter of type 'CustomerName'.
//   Object literal may only specify known properties, and 'label' does not exist in type 'CustomerName'."

getName1({name:"Rashmi"});
getName1({name:"John"});  
