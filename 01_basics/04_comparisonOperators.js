// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==2);
// console.log(2!=1);

// console.log("2">1);  //true
// console.log ("02">1);  //true

console.log(null>0);  //false (comparison operators[>,<,>=,<=] conert null to 0 then compare)
console.log(null==0); //false (equality check operator work differently,it's doesn't convert value of null to 0)
console.log(null>=0); //ture

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)
//answer will be false in every case

// === (strictly check the data type also)
console,log("2" === 2);