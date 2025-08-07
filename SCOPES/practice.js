let name = "rajan";

function fun() {
    console.log("greeting ! ", name);
    
    greet();
    var x = 10;
    function greet() {
        console.log('value of x is ', x);       
    }

    console.log('hey Coder');
    greet();
    console.log(x);
}


function enjoy() {
    console.log("have fun ! ", name)
}

fun();
enjoy();



