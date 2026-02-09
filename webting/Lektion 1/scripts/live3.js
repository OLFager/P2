let width =40;
let height = 2
for (let i = 1; i <= height; i++){
let text = "";
if (i%2 == 0 ){
for (let j = 1; j <= width; j++){
if (j%2 == 0 ){
    text += "#";
    let last = "#";
}else{
text += " ";
    let last = " ";
}
}
console.log(text);
}else{
for (let j = 0; j < width; j++){
if (j%2 == 0 ){
    text += "#";
    let last = "#";
}else{
text += " ";
    let last = " ";
}

}
console.log(text);
}

}