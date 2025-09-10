const iphone = {
  name: "iphone",
  price: 10000,
  rating: 4.8,
  display: function () {
    let iphoneRed = {
      name: "Iphone Red",
      print: () => {
        console.log(this);
      },
    };
    iphoneRed.print();
  },
};

iphone.display(); // this defends on who calls it(calling site) this = iphone
// iphone.display() calling site (whole expression)
// obj is the caller (the object that owns the method).
// display is the function being called.
