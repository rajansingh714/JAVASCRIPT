function fetchdata(url) {
  return new Promise(function (resolve, reject) {
    console.log("Start download from url", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download data is Completed");
      reject(data);
      //  console.log("Hello");
      //resolve("Rajan"); // these lines will not be executed as promise is fullfiled only once
      //resolve(123);
    }, 5000);
  });
}

let x = fetchdata("www.google.com");
x.then(function success(v) {
  console.log("value is ", v);
  return 10;
})
  .then(function success(v) {
    console.log("again value is", v);
  })
  .catch(function errorHandle(err) {
    console.log("error is ", err);
  })
  .finally(() => {
    console.log("expreiMent complete");
  });
