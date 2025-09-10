function Product(n, p) {

    // console.log(this);
    
    this.name = n;
    this.price = p;

    // this.display = function() {
    //     console.log(this.name, this.price);
        
    // }

    // this.buy = () => {
    //     console.log(this);
    // }
    return 10;
}


let p1 = new Product('iphone', 10000);
// console.log(p1);

// p1.display();
// p1.buy();


let p3 = Product('iphone', 100000);
console.log(p3);

