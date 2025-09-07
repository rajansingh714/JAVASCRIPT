// Task
// Write a function to download  data from a url
// Write a function to save that downloaded data in a file and return the filename
// Write a function to upload written in previous step to a newurl



function fetchdata(url) {
    return new Promise(function(resolve, reject) {
        console.log("Start download from url", url);
        setTimeout(function processDownloading() {
            let data= "Dummy data";
            console.log("Download data is Completed");
            resolve (data);
          //  console.log("Hello");
            //resolve("Rajan"); // these lines will not be executed as promise is fullfiled only once
            //resolve(123);

        }, 7000);   
    });
}


function writeFile(data) {
    return new Promise(function(resolve,reject) {
        console.log("Starting data ", data, "File");
        setTimeout(function ProcessingWrite(){
            let fileName= "result.text";
            console.log("File Written successfully");
            resolve(fileName);
        }, 3000);
    });
}

function uploadData(file,url) {
    return new Promise(function(resolve, reject) {
        console.log("upload started on url", url, "filename is " ,file);
        setTimeout(function process() {
            let result= "SUCCESS";
            console.log("Upload Done");
            resolve(result);
        }, 5000);
    });
}


let downloadPromise = fetchdata("www.drive1.google.com");
let writePromise = writeFile("dummy data");
let uploadPromise = uploadData("test.text", "drive.google.com");

console.log("start");
Promise.all([downloadPromise, writePromise, uploadPromise]).then(function process(value) {
    console.log(value);
});



