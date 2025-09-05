function gun(x, fn) {
    for(var i = 0; i<x; i++) {
        console.log(i);
        
    }

    fn();
    // console.log("inside gun");
}

gun(10, function() {
    console.log("inside fn");
    
});


