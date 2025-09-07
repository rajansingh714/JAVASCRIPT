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
  let file = await writeFile(downloadData);
  let uploadResponse1 = await uploadData(file, "www.drive.google.com");
  let downloadData1 = await fetchdata("www.google.com");
  let file1 = await writeFile(downloadData1);
  let uploadResponse2 = await uploadData(file1, "www.ondrive.com");
  let downloadData2 = await fetchdata("www.Ondedrive.com");
  let file2 = await writeFile(downloadData2);
  let uploadResponse3 = await uploadData(file2, "www.metabasedrive.com");

  return uploadResponse1 + uploadResponse2 + uploadResponse3;
}

console.log("start");
processing();
console.log("end");
