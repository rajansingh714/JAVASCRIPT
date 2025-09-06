function dummyPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Timer is promise");
    }, 0);
  });
}

console.log("start of the file");

setTimeout(function timer1() {
  console.log("Timer1 is done");
  let y = dummyPromise();
  y.then(function promiseY(value) {
    console.log("Whose promise ? ", value);
  });
}, 0);

let x = Promise.resolve("Rajan's Promises");
x.then(function processPromise(value) {
  console.log("Whose promise ?", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 is done");
}, 0);

console.log("End of the file");
