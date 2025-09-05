function fun(x, fn) {
  // x-> is a number
  // fn-> is a call back function
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn(); // calling the call-back fxn
}

function gun() {
  console.log("inside gun");
}

fun(10, gun);

// fun(10, function() {
//     console.log("krishna");
// });

let g = function process() {
  console.log("inside g");
  return function () {
    console.log("return a function");
  };
};

fun(2, g()); // it gives an undefined because function expression is not returning amything
