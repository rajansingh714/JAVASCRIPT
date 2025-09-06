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
      //  console.log("Hello");
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

async function processing() {
  let downloadData = await fetchdata("www.google.com");
  console.log("downloading await completed");
  let file = await writeFile(downloadData);
  console.log("writing await is completed");
  let uploadResponse = await uploadData(file, "www.drive.com");
  console.log("upload await is completed");
  console.log("completed process with uploadResponse", uploadResponse);
  return true; // async function is also return a promise
}

console.log("start");
processing();
console.log("end");
