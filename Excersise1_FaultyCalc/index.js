// Use this calc as your own risk
// alert("js loaded");

let num1=prompt("Enter your First number: ");
num1 =Number(num1);
let num2=prompt("Enter your Second number: ");
num2 =Number(num2);

let opr=prompt("Enter your Operation: ");

if (opr==="+") {
    if(Math.random()<0.5){
        alert("Result: "+(num1-num2));
    }
    else{
        alert("Result: "+(num1+num2));
    }
}
else if(opr==="-"){
    if(Math.random()<0.5){
        alert("Result: "+(num1+num2));
    }
    else{
        alert("Result: "+(num1-num2));
    }
}

else if(opr==="/"){
    if(Math.random()<0.5){
        alert("Result: "+(num1*num2));
    }
    else{
        alert("Result: "+(num1/num2));
    }
}
else if(opr==="*"){
    if(Math.random()<0.5){
        alert("Result: "+(num1**num2));
    }
    else{
        alert("Result: "+(num1*num2));
    }
}