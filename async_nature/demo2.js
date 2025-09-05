function process() {
  console.log("start");
  setTimeout(function exec() {
    console.log("some executed task");
  }, 10000);
  for (let i = 0; i < 1000000; i++) {}
  console.log("end");
}

process();
console.log("HARE KRISHNA");
