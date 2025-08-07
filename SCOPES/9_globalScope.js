let name = "rajansingh";

function fun() {
    enjoy();
    console.log("greeting !", name);
    var x = 10;
    function enjoy() {
        console.log("value of x is ", x);
    }
    console.log("hey coder ")
    enjoy();
    console.log(x);
}

function greet() {
    console.log("have fun ! ", name);
}

fun();
greet();

