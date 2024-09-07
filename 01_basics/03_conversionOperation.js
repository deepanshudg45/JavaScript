// let score= 33
// let score="33abc"
// let score= null
// let score= undefined
// let score= true
let score= "Deep"

console.log(typeof score);
//or
console.log(typeof (score));

let valueInNumber= Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33"-> 33
// "33abc"-> NaN is actual value but type is number
// true-> 1; false-> 0;

// let isLoggedIn= 1
// let isLoggedIn= 0
let isLoggedIn= ""
// let isLoggedIn= "Hitesh"
let booleanLoggeedIn =Boolean(isLoggedIn)
console.log(booleanLoggeedIn);

// 1-> true; 0-> false;
// ""-> false
//"hitesh"-> true


//*****************************************************************Opertaions**********************************************************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1="Deep"
let str2= " Gahatori"
let str3= str1+str2
console.log(str3);

console.log("1"+2);
console.log(2+"1");
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log(+true); //1 (convert true to 1)
// console.log(true+); not possible
console.log(+""); //0 (convert false to 1)

let gameCounter=100
++gameCounter; //prefix 101
gameCounter++; //postfix increment 101
console.log(gameCounter); // consider mdn to learn more about prefix and postfix