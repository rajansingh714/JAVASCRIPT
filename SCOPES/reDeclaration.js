// var x = 20;
// var x = 30;
// console.log(x, x);
// // give a error because let is not allow to redeclare the value
// // let y = 10;
// // let y = 7;


var  name = "krishna";

function fun() {
    console.log("god name ", name);

    greet();
    var x = 20;
    function greet() {
        console.log("heR age ", x);
    }

    console.log("God name ", name);
    greet();

}


function enjoy() {
    console.log("hare krishna")
}

fun();
enjoy();

