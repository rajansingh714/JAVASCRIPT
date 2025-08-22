console.log("start");
function process() {
    setTimeout(function exec1() {
        console.log("exec1 function");
    }, 5000);
}

setTimeout(function exec2() {
    console.log("exec2 function ");
}, 4000);

for(let i = 0; i<10000000000; i++) {

}

console.log("End");
process();
console.log("Hare krishna");

