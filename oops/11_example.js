function Product(n, p) {
    this.name = n;
    this.price = p;

    this.display = function() {
        console.log(this.name, this.price);
    }
    return this;
}

const p2 = Product("iphone", 100000);
console.log(p2);
