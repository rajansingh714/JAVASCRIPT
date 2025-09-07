function fun() {
  return new Promise(function f(resolve, reject) {
    setTimeout(function process() {
      console.log("resolved");
      resolve(123);
    }, 5000);
  });
}

let x = fun();
let y = x.then(function exec(value) {
  console.log("value is ", value);
  for (let i = 0; i < 1000000; i++) {
    // console.log("krishna");
  }
  return 100;
});

x.then(function exec1(value) {
  console.log("yo the value is ", value);
  return 200;
});
