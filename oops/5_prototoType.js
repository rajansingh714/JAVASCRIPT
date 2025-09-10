function Product(n) {
    this.name = n;
}

let d =  new Product("iphone");

console.log(d);

d.prototype.display = function() {
    console.log("product name ", this.name);
    
}


