// "use strict" use strict mode we apply the condtion of the variable. it mandotory to declare the variable
// strict mode auto global is prohibitaed

function fun() {
  rajansingh = "teacher";
  swag = "millionaire";
  console.log(swag);
  console.log(rajansingh);
}

("use strict"); // it does not work because of not declare top of code or function inside the code

function gun() {
  "use strict"; // evreyThing is inside of gun in strict mode so that reason we declare a name varibale
  var name = "ankesh";
  console.log(name);
}

fun();
gun();
