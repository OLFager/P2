//alert("This is javascript");
console.log("This will be shown in the console");
let num1 = 3;
let num2 = 5;
let x = "";
let sum12 = num1 + num2;
let mul12 = num1 * num2;
console.log("The sum of "+ num1 + " and "+ num2 + " are " + sum12);
console.log("The multiplication of "+ num1 + " and "+ num2 + " are " + mul12);

const findNumber = function(){
x = prompt("Enter a number");
//convert x to a number value and check if it worked (prompt always returns string)
let value = Number(x);
if (!isNaN(value)) {
    for (let i = 0; i<value; i++){
console.log(value);
    }
} else {
    console.log(x + " is NOT a number");
}
return value;
}
let value = findNumber();
console.log(value);
const triangle = function(value){
let text = "";
for(let i = 1; i <= value ; i++){
text += "#";
console.log(text);
} 

}
triangle(value);