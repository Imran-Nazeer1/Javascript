let str=prompt("Enter your name: ");
let Nospacestr = str.replaceAll(" ","");
// console.log(Nospacestr);
alert(`Your Email id will be: @${str}${Nospacestr.length}`);