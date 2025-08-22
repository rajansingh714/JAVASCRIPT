function process() {
  console.log("start");
  for (var i = 0; i < 3; i++) {
    setTimeout(function exec() {
      console.log(" executed after some time");
    }, 3000);
    console.log("inside for loop");
  }

  for (var j = 0; j < 10000; j++) {}
  console.log("end");
}
process();
