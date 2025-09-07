async function fun() {
  console.log("entered");
  let x = await 20; // or you also write await Promise.resolve(20);
  return x;
}

console.log("Start");
let val = fun();

val.then(function f(value) {
  console.log("value is ", value);
});

console.log("end");
