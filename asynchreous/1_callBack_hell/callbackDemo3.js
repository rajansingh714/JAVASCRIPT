// Task
//1. write a function  to download 
//2. write a function to save that download data in a file and return the filename
//3. Write a function to upload the file written in previous step to a newurl

function fetchCustom(url, fn){
    // download the content of the url
    // this download take can some time
    // we will download from the url and then whatever the result, we will pass to the  callback

    console.log("Starting download from url", url);
    setTimeout(function process(){
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
    },3000);
}

function writeFile(data, fn){
    console.log("start writting data", data);
    setTimeout(function process(){
        console.log("writing completed");
        let filename= "output.text";
        fn(filename);
    },4000);
}


function uploadFile(filename, newurl, fn){
    console.log("upload started");
    setTimeout(function process(){
        console.log("File", filename, "uploadsuccesfully", newurl );
        let uploadResponse= "Success";
        fn(uploadResponse);
    },2000);
}

fetchCustom("www.google.com", function downloadCallback(response){
        console.log("Download response is ", response);
    writeFile(response, function writeCallback(filenameResponse){
        console.log("new file written is ", filenameResponse);
    uploadFile(filenameResponse,"www.drive.google.com",function uploadCallback(uploadResponse){
        console.log("Successfully Responsed",uploadResponse);
    });
    });
});



