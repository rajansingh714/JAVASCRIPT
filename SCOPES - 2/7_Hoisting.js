fun(); // hoisting

function fun() {
  console.log("Rajansingh");
}

// why is not working is here

// gun(x, y);

// let x = 10;
// let y = 20;
// function gun(x, y) {
//     console.log(x, y);
// }

// why is it working

fun1(a, b);

var a = 20;
var b = 30;

function fun1(a, b) {
  console.log(a, b);
}

// Hoisting is a direct consequence of lexical parsing that happens in js, due to which we are able to access some function & variable before declaring them.which gives a notion that they are moved up in a file.
