// "use strict"; -> it gives a error because it required all varaible must be declared

var teacher = "Rajan singh";
function fun() {
   var teacher = 'Krishna';
   teachingasistant = 'hare krishna';
   console.log(teacher, teachingasistant);
}

fun();
console.log(teacher);
console.log(teachingasistant);

