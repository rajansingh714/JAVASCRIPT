function fun() {
  console.log("fun called");
  setTimeout(function exec1() {
    console.log("inside this 3s timeout");
  }, 3000);
  setTimeout(function execu2() {
    console.log("inside this 5s timeout");
  }, 5000);
}

fun();

for (let i = 0; i < 10000000000; i++) {
  // some task
}

setTimeout(function last() {
  console.log("inside this 0s timeout");
}, 0);
