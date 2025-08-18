{
  var z = 10;
  console.log(z);
}
console.log(z);

// this is the difference between let and var
if (false) {
  let m = 20;
}

// console.log(m); it gives error due to let gives an block scope

{
  let a = 20; // it always give a block scope
  a = 200;
  console.log(a);
}
//console.log(a); // a gives a error we discuss the next lect

function fun() {
  // console.log(y);  // after declare the value then we print a value
  let y = 50;
  console.log(y);
}

var z = 100;
fun();

// let does not allow to redeclaration

// var is a function block and let is a block scope
// when you declare a variable with let after declaration you get access a variable
