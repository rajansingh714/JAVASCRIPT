function fun() {
    console.log("fun called");
    
}

function gun(fn) {
    console.log("inside gun");

    fn();

    console.log("leave gun");
}

gun(function () {

})


gun(fun);


