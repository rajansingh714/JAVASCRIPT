console.log("start");

setTimeout(function exec() {
    console.log("task done");
}, 2000);

console.log("end");





const id = setTimeout(function () {

}, 5000);

console.log(id);
console.log(typeof(id));

// in the node type of id is object but this same code is browser gives a type of id is number;