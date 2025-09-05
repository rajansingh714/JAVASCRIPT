function fetchdata(url) {
   return new Promise(function(resolve, reject) {
        console.log("going to start  the download");
        setTimeout(function process() {
            let data= "Dummy Download data";
            console.log("download completed");
            resolve(data);
            console.log("hare krishna");
        }, 10000);
        console.log("Timer is mimic download  Started");
    });
}


console.log("Starting the programm");
console.log("we are expecting to mimic a downloader");
let x = fetchdata("www.facebook.com");
console.log("New promise object is created successfully, but downloading still going on");
console.log(x);

   