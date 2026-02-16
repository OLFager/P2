let values = [5,6,9,19,42];
function concatArray(numbers, pivot){
let firsthalf = numbers.slice(0,pivot);
let secondhalf = numbers.slice(pivot+1,numbers.length);
console.log(firsthalf);
console.log(secondhalf);
for (let i = 0; i < secondhalf.length; i++) {
    firsthalf.push(secondhalf[i]);
}
return firsthalf;
}
console.log(concatArray(values,2));
 