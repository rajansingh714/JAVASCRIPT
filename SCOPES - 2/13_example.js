// gun();

// function gun() { // fun -> global
//     console.log("krishna") // scope of fun  
// }

// function gun() { //gun is global an overRide
//     console.log("radhe"); // socpe of gun
// }


// 2nd Example

function fun(val) { // global
    var student; // scope of fun
}

function run() { // global 
    console.log(student); // scope of run
}

student = 10; // autoGlobal

function gun() { // global
    console.log(student); 
    student = "singh"; // auto global
}


gun(); 
run();  
