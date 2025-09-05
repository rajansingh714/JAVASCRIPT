function fetch(url) {
  return new Promise(function (resolve, reject) {
    console.log("Starting Fetching from", url);
    setTimeout(function process() {
      let data = "Dummy data";
      console.log("completed fetching the data");
      resolve(data); // return a some data on success
    }, 4000);
  });
}

function fetch1(url) {
  return new Promise(function (resolve, reject) {
    // write some logic;
    for (let i = 0; i < 10000000; i++) {}
    console.log("Completed");
    resolve("rajan");
  });
}

fetch1("www.google.com");
