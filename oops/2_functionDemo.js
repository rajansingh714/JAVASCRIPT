function Product(n, p) {
    this.name = n;
    this.price = p;

    // assume return this;
    // return {name: 'rajan', age: 25}
    this.display = function() {
        console.log(this.name, this.price);
        
    }
    return 10;
}

// call the function with the new keyWord that time we do not return anything. then after automatic it return

let p1 = new Product('iphone', 10000);
console.log(p1);
 
p1.display();

let p3 = new Product('samsungGlaxy', 5000);
p3.display();

let p2 = Product('mackbook', 20000);
console.log(p2);















