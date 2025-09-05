
// function fun() {
//     console.log("fun called");
// }

// function gun(fn) {
//     console.log("hello world");
//     fn();
//     console.log("rajan singh");
//     // console.trace(); // it trace the value
//     // anonymus fxn is not easy debug then we can use the console.trac():;
// }

// gun(function logger() { // its a function expression
//     console.trace();
//     console.log("new function is passed");
// })


let a = {
    "user": {
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zipcode": "12345"
      },
      "phoneNumbers": [
        {
          "type": "home",
          "number": "555-1234"
        },
        {
          "type": "work",
          "number": "555-5678"
        }
      ],
      "isActive": true,
      "registeredAt": "2024-02-08T10:00:00Z",
      "friends": [
        {
          "name": "Jane Smith",
          "age": 28,
          "email": "jane.smith@example.com"
        },
        {
          "name": "Bob Johnson",
          "age": 32,
          "email": "bob.johnson@example.com"
        }
      ],
      "preferences": {
        "theme": "dark",
        "language": "en-US",
        "notifications": true
      }
    }
  }
  
//  var x = JSON.parse(a);
// 
  // console.dir(x, {depth:10})

// console.timeEnd(); 

// gun(fun); //it is also valid


