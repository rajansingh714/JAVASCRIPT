// NaN is the only primitive value in JS that doesn't follow identity properly and is not equal to itself

let a = "10";
let b = "abc";
let c = "rajan";
let d = 10 - c;
console.log(a, b, c, d);
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

let x = {
  valueOf() {
    return 6;
  },
};
console.log(x);
console.log(typeof x == "number" && isNaN(x) ? "NaN value" : "Not NaN a value");
