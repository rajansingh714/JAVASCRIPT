function fetchCustom(url) {
  // we mimic the function
  // this downloading can take some time
  // we will download from  url and then whatever the result, we will pass to the  callback

  console.log("Starting download from url", url);
  setTimeout(function process() {
    console.log("Download completed");
    let response = "Dummy data";
    //fn(response);
    return response; // it gives a undefined
  }, 3000);
}

// not return anything a function and store in variable then it gives an undefined
const response = fetchCustom("www.google.com");
console.log(response);
console.log("End of file");
