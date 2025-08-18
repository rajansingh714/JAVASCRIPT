function fun() {
  teachingAssistant = "krishna"; // it will be not a global scope. it is a function scope
  console.log(teachingAssistant);
  var teachingAssistant = "rajanSingh";
  console.log(teachingAssistant);
}

fun();
