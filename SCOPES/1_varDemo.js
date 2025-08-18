function fun() {
  console.log(a); // we get a undeffined because var gets global scope

  console.log(v); // why we get undefined we explain in lexical scoping
  var v = 20;
  console.log(v);
}

fun();

{
  var x = 10; // become global due to var, it is not a block scope
  // console.log(x);
}

console.log(x);

if (true) {
  var z = 30;
}

if (false) {
  var a = 50; // it print due to interpreter language
}

console.log(z);
console.log(a);

//let d  = 40;
//let d = 90;  re - declare is not allow

var fg = 50;
var fg = 100; // var re - delcaration is allow
