function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("Start download from url", url);
        setTimeout(function processDownloading(){
            let data= "Dummy data";
            console.log("Download data is Completed");
            resolve (data);
            //console.log("Hello");
            //resolve("Rajan"); // these lines will not be executed as promise is fullfiled only once
            //resolve(123);

        },7000);
       
    });
}

async function processing() {
    console.log("Enterning processing");
    let value1 = await fetchdata("www.youtube.com");
    console.log("youtube download is completed");
    let value2 = await fetchdata("www.google.com");
    console.log("google downloading is completed");
    console.log("Existing downloading");
    return value1 + value2;
}

console.log("Start");

setTimeout(function timer1 () {
    console.log("timer 1");
},0);

console.log("after setting timer 1");

let x = processing();

x.then(function (value) {
    console.log("finally processing promise resolves with ", value);
});

setTimeout(function timer2(){
    console.log("timer 2");
}, 1000);

setTimeout(function tiemr3() {
    console.log("timer 3");
}, 0);

console.log("End");