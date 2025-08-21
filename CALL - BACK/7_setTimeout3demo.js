let id1 = setTimeout(function process() {
  cousole.log("hello wrold");
}, 5000);

let id2 = setTimeout(function fn() {
  console.log("rajan singh");
  // clearTimeout(id);
}, 2000);

// console.log(id2);
// console.log(id1);
// setTimeout always returns unique id and setinterval also return a unique id and clearTimeout() it nullifies the value what ever i passed a value
