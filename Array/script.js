let mark =[98,87,94,48,95,100];

// console.log(mark[1]);

let total =mark.length;
console.log(total);

let sum=0;

for(let i=0;i<total;i++){
    sum=sum+mark[i];
}

let avg=sum/total;
console.log(avg);