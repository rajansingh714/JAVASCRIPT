// Task
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function fetchCustom(url, fn) {
  // download content fo the url
  // this downloading can take sometime
  // we will download the content from url, and then whatever is the result, we will pass to the callback

  console.log("Starting downloading from", url);
  setTimeout(function process() {
    console.log("Download completed");
    let response = "Dummy data";
    fn(response);
    console.log("111111111");
  }, 5000);
}

function writeFile(data, fn) {
  // this function writes data in a new file
  console.log("started writing data", data);
  setTimeout(function process() {
    console.log("Writing completed");
    let filename = "ouput.txt";
    fn(filename);
    // console.log("writing ended");
  }, 4000);
}

function uploadFile(filename, newurl, fn) {
  console.log("Uploaded Started");
  setTimeout(function process() {
    console.log("File", filename, "uploaded Successfully on ", newurl);
    let uploadRsponse = "SUCCESS";
    fn(uploadRsponse);
    // console.log("uploaded ended");
  }, 2000);
}

fetchCustom("www.google.com", function downloadCallback(response) {
  console.log("Download response is ", response);
  writeFile(response, function writeCallback(filenameResponse) {
    console.log("new file written is ", filenameResponse);
    uploadFile(
      filenameResponse,
      "www.drive.com",
      function uploadCallback(uploadResponse) {
        console.log("successfully uploaded ", uploadResponse);
      }
    );
  });
});
