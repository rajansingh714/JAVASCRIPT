function demo1() {
  return new Promise(function (resolve, reject) {
    console.log("hiiii");
    setTimeout(function process() {
      console.log("whoho, task is done");
      resolve("Students are the best");
    }, 10000);
    console.log("By");
  });
}

let x = demo1();
console.log(x);
