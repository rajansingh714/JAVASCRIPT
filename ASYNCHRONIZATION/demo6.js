for (var i = 0; i < 4; i++) {
  setTimeout(function exc() {
    console.log("hi", i);
  }, i * 1000);
}
