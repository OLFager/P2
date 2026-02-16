function range(start, end, step){
    let numbers = [];
if(start>end && step < 0){
    for (let i = start; i >= end; i += step) {
    numbers.push(i);
}
return numbers;
}
    else if (step){
    for (let i = start; i < end+1; i += step) {
    numbers.push(i);
}
return numbers;
}else{
    for (let i = start; i < end+1; i++) {
    numbers.push(i);
}
return numbers;
}

}

function sum(numbers){
    let summation = 0;
for (let i = 0; i < numbers.length; i++) {
    summation +=numbers[i];
}
return summation;
}

console.log(range(5, 2, -1));
console.log(sum(range(10,13)));
 