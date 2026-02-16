let tal = [1,2,3,4,5,6];
function voresReverse(val){
    window.nyArray = [];
    for (let i = 0; i < val.length; i++) {
       nyArray.push(tal[val.length-i-1]);
    }
}
voresReverse(tal);
console.log(nyArray);
function reverseArrayInPlace(val){
    let localArray = [];
    for (let i = 0; i < val.length; i++) {
        localArray.push(tal[val.length-i-1]);
    }
    return localArray;
}
console.log(tal);
tal = reverseArrayInPlace(tal);
console.log(tal);