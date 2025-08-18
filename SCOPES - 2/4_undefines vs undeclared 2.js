var teacher = "rajan";

function fun() {
  var teacher = "ankeshsingh";
  console.log(teacher, name); // output is ankeshsingh,undefined
  var name = "swagsingh";
}

// 1st phase in js is parsing
// 2nd phase in js is execution
function gun() {
  console.log(subject, typeof subject); //output is undefined
  var subject = "js";
  console.log(teacher); // output is rajan
}

console.log(teacher);
gun();
fun();
