

// const modulee = {
//     x: 42,
//     getX: function() {
//          return this.x;
//     },
// }

// const unboundGetX = modulee.getX();
// console.log(unboundGetX); // Expected output: 42


// const moduleee = {
//     x: 42,
//     getX: function() {
//          return this.x;
//     },
// }

// const unboundGetx = moduleee.getX;
// console.log(unboundGetx()); // Expected output: undefined

// const boundGetx = unboundGetx.bind(moduleee);
// console.log(boundGetx());







this.name = "krishna";
const obj = {
  name: 'Alice',
  regularFunction: function () {
    console.log('Regular:', this.name);
  },
  arrowFunction: () => {
    console.log('Arrow:', this.name);
  }
};

obj.regularFunction(); // Regular: Alice ✅
obj.arrowFunction();   // Arrow: undefined ❌



const obj1 = {
    name: "krishna",
    hometown: "vrindavan",
    display: function() {
        const y = ()=> {
            console.log(this.name, 'lived in ', this.hometown);
        }
        y();
    }
};

obj1.display();


