function fetchCustom(url, fn) {
    // we mimic the function 
    // this download take can some time
    // we will download from the url and then whatever the result, we will pass to the  callback

    console.log("Starting download from url", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
        console.log("Ending the function");
    }, 3000);
}

 
const response = fetchCustom("www.google.com", function callback(response) {
    console.log("downlod contenet", response);
});
console.log("End of file");

