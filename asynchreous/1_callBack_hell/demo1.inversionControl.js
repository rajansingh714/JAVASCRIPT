function fun(inputstring, fn) {
    // internal function 
    let output = inputstring.split(',');
    for(let i = 0; i<output.length; i++) {
        fn(output[i]);
        fn(output[i]);
    }
}

fun("name: rajan, subject: javascript", function process(ip) {
    let arr = ip.split(":");
    console.log("{",arr[0], " => ", arr[1],"}");
});
  
// INversion of control due to callback design everything is wrong due to callback