// let x = 10;
// let y = 20;
// let z = 30;
// let result = x > y ? x : y > z ? y : z;
// console.log(result);

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

let g = function process() {
  console.log("inside g");
  return function () {
    console.log("returned a function");
  };
};

fun(10, g());
