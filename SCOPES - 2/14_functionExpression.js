function fun() { // function definition

}


let run = function() { // function expression

}

(function() {}) //not a normal function

// function

// fun1();
// function fun1() {
//     console.log("hare_krishna");
// }


// gun(); // it gives an type error and gun is not a function
console.log("gun function expression gives is ", gun)
var gun = function() {
    console.log("jai shree ram");
}

console.log("type of gun is ", typeof(gun));
gun();


var player = "virat";
function fun() {
    if(player == 'vk') {
      var player = 'vk'; 
      console.log(player);
      console.log("i am in if");
    }
    console.log(player);
}

fun();

