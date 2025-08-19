console.log(undefined + "2"); // using ToString it will gives a "undefined2"

console.log(undefined + 123); // using ToNumber it will gives a NaN. in this line undefined will give a NaN
console.log(null + 12345); // using ToNumber it will gives a 12345/ in this line it will give a +0

console.log(1 - "2"); // using a ToNumber it will gives a -1
console.log("undefined" - 2); //using a ToNumber undefined will convert in to NaN so that reason output will NaN
console.log(null - 12345); // using a ToNumber null  will give a zero. so output will be -12345

console.log(undefined + undefined); // none of them string so it convert into
console.log(7 / 0); // undefined
console.log(3 / "rajan"); // it will give a NaN ---> Invalid Number
