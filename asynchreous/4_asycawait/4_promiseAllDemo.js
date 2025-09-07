const p1 = Promise.resolve(12345);
const p2 = 100007;
const p3 = new Promise((resolve, resject) => {
  setTimeout(() => {
    resolve("foo");
  }, 2000);
});

Promise.all([p1, p2, p3]).then((values) => {
  // every promise.all return a promise then we attach a .then value
  console.log(values);
});
