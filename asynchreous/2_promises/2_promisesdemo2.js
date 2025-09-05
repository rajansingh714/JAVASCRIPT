function fetch1(url) {
    return new Promise(function(resolve,reject){
        // write a logic;
        for(let i=0; i<10000000; i++) {

        }
        console.log("Completed");
        resolve("rajan");
    });
}

let x = fetch1("www.google.com");
console.log("we have called the promises", x);