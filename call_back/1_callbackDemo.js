function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }

  fn(); // calling the call back function passed
}

// fun(10, function log() {
//     this is the call back function
//     console.log("custom logger");
// });

fun(10, function log() {
  console.log("anonymous logger");
});

let g = function process() {
  // PASSING A FUNCTION EXPRESSION
  console.log("inside g ");
};

fun(5, g()); //-> it gives a disaster error fun(5, undefined)
// always remember in callback when you passed a function in to another function then don't call it immediate because you dont passed a function you passed a result of the function. when a function call it the immiadiate it gives a result of the function

// fun(2, g); // g is a prameter to pass the value g is not a function that is passed a value
