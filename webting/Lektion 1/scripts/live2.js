for (let i = 1; i <= 100; i++){
    let text = "";
    
    if (i%3==0){
        text += "fizz";
    }

    if(i%5==0){
        text += "buzz";
    }

    if(text == ""){
        console.log(i);
    }else{
        console.log(text);
    }
}