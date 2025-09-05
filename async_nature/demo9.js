function fun() {
  console.log("fun called");
  setTimeout(function exec1() {
    console.log("inside this 3s timeout");
  }, 3000);
  setTimeout(function execu2() {
    console.log("inside this 7s timeout");
  }, 7000);
}

fun();

setTimeout(function last() {
  console.log("inside this 0s timeout");
}, 0);
