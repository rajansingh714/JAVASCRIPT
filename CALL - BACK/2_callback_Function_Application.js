let arr = [1, 2, 3, 4, 5];
let x = arr.map(function log(v, i) {
  // console.log(v, i); // v is value
  // i is index of the arrray
  // it return something
  // when we not return anything then return automatic undefined
  // return v * v;
});

// console.log(x);
// console.log(arr);

var arr1 = [23, 4, 5, 67, 1, 89];

let y = arr1.map(function log(v, i) {
  console.log(v, i);

  return v * v;
});

console.log(y);
console.log(arr1);
