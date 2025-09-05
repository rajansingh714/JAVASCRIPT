function demo2(val) {
  return new Promise(function (resolve, reject) {
    console.log("START");
    setTimeout(function process() {
      console.log("completed timer");
      if (val % 2 == 0) resolve("Even");
      else reject("Odd");
    }, 10000);
  });
}

let x = demo2(4);
console.log(x);
