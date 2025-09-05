// Task
// Write a function to download  data from a url
// Write a function to save that downloaded data in a file and return the filename
// Write a function to upload written in previous step to a newurl

function fetchdata(url) {
  return new Promise(function (resolve, reject) {
    console.log("Start download from url", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download data is Completed");
      resolve(data);
      console.log("Hello");
      //resolve("Rajan"); // these lines will not be executed as promise is fullfiled only once
      //resolve(123);
    }, 7000);
  });
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("Starting data ", data, "File");
    setTimeout(function ProcessingWrite() {
      let fileName = "result.text";
      console.log("File Written successfully");
      resolve(fileName);
    }, 3000);
  });
}

function uploadData(file, url) {
  return new Promise(function (resolve, reject) {
    console.log("upload started on url", url, "filename is ", file);
    setTimeout(function process() {
      let result = "SUCCESS";
      console.log("Upload Done");
      resolve(result);
    }, 5000);
  });
}

// let data= fetchdata("www.google.com");
// let filenaame= writeFile(data);
// let response= uploadData(filename,"www.drive.com");

// the above will not work read fashion

// let downloadPromise= fetchdata("www.facbook.com");
// downloadPromise.then(function processDownloading(value){
//     console.log("download promise is fullfiled");
//     let writePromise = writeFile(value);
//     writePromise.then(function processWrite(value){
//         console.log("writing done");
//         console.log("filename is ", value);
//     })
// })

//above code is solve inversion of control but still gets promise hell

// let downloadPromise = fetchdata("www.google.com");

// x = downloadPromise.then(function processDownloading(value){
//     console.log("download done with following value", value);
//    // return "swag";
// });

// x.then(function process(value){
//     console.log("x promise value is ", value);
// });

let downloadPromise = fetchdata("www.drive.com");
downloadPromise
  .then(function processDownloading(value) {
    // .then consume the promise and callback is return the promise
    console.log("download done with following value", value);
    return value;
  })
  .then(function processWrite(value) {
    return writeFile(value);
  })
  .then(function processUpload(value) {
    return processUpload(value);
  })
  .then(function process() {
    console.log("done");
  });

console.log("Ended");
