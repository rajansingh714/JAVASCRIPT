var teacher = "rajan";

function fun() {
  console.log(subject);
  var teacher = "singh";
  var subject = "javascript";
  // console.log(teachingassistant); // it gives an error and autoglobal works with target reference not source
  teachingassistant = "ankesh";
  console.log(teachingassistant);
  console.log(teacher);
}

fun();
console.log(teachingassistant);
console.log(teacher);
