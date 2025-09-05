function process(){
for(let i = 0; i<4; i++) {
    setTimeout(function() {
        console.log("hello", i);
    }, i*1000);
}
}

process();

for(var i = 0; i<4; i++) {
    setTimeout(function() {
        console.log("hii", i);
    }, i*1000);
}
