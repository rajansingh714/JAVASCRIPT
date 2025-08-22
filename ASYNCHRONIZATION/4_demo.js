function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("executed some task");
    }, 0);
    console.log("End");
}

process();

console.log("TATA");

