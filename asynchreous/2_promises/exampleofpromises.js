function fetchdata(url) {
  return new Promise(function (resolve, reject) {
    // console.log("Start download from url", url);
    // setTimeout(function processDownloading(){
    //     let data= "Dummy data";
    //     console.log("Download data is Completed");
    //     resolve (data);

    // },7000);
    for (let i = 0; i < 100000000; i++) {}
    resolve("Dummy Data");
    console.log("hello ");
  });
}

let x = fetchdata("www.drive.com");
console.log("done");
console.log(x);
