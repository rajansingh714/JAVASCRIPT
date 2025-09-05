function process() {
  console.log("start");
  setTimeout(function exec1() {
    console.log("exec function 1");
  }, 5000);

  setTimeout(function exec2() {
    console.log("exec function 2");
  }, 3000);

  for (let i = 0; i < 10000000000; i++) {}
  console.log("End");
}

process();
console.log("Hare Krishna");
