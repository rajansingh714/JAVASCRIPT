function Product(n, p) {
    this.name = n;
    this.price = p;
}


const p3 = Product('mackBook', 10000);
console.log(p3); // it returns a undefined because we cannot return manually or we can not call with this keyword


// in function we call with witout new keyword but in the class we can not call without new keyword
// class is like function but we defined in js because other language also concept in class and object so that reason in js class and object it discover