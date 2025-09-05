console.log("start");
setTimeout(function execute() {
  console.log("task is cimpleted");
}, 5000);
console.log("end");

setTimeout(function swag() {
  console.log("task completed 1");
}, 2000);

let id1 = setTimeout(function rajan() {
  console.log("task is completed 2");
  // clearTimeout(id1);
});
