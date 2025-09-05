function fun() {
    console.log("fun called");
}

function gun(fn) {
    console.log("hello world");
    fn();
    console.log("rajan singh");
    // console.trace(); // it trace the function call
    // anonymus fxn is not easy debug then we can use the console.trace():;
}

// gun(function() { // its a function expression
//     console.log("new function is passed");
// })

gun(fun); //it is also valid

