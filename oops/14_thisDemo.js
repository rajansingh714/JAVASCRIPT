const obj = {
  name: "Singh",
  display: function () {
    console.log(this.name);
  },
};

const fn = obj.display; // just reference, no call yet
fn();
// calling site: fn()
// here `this` = undefined (in strict mode) or window (in non-strict)
