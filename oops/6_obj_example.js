let obj = {
  name: "krishna",
  company: "Whole World",
  display: function () {
    console.log(this.name, " boss of the ", this.company);
  },
};

// obj.display();

this.name = "krishna";

let obj1 = {
  name: "rajan",
  company: "notHing",
  display: () => {
    console.log(this.name, "doing", this.company);
  },
};

obj1.display();

console.log(this);

// arrow function resolve lexically orhterWise other function resolve when fuction get called
