let fruits = {
"apple": 12,
"orange": 14,
"pear": 16
};
let total = 0;
for(let key in fruits){
total += fruits[key]
}
console.log("the total amount of fruits is",total);