const countBs = function(text){
    let count = 0;
for(let i = 0 ; i< text.length ; i++ ){
    if (text[i]=="B"){
        count++;
    }
    }
    return count;
}

const countChar = function(text,c){
    let count = 0;
for(let i = 0 ; i< text.length ; i++ ){
    if (text[i]==c){
        count++;
    }
    }
    return count;
}
console.log(countBs("BfsasafBfsaBdsvbdbBsafgdsBC"));
console.log(countChar("BfsasafBfsaBdsvbdbBsafgdsBC","a"));