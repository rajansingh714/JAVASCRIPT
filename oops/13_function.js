function Product(n, p) {
    this.name = n;
    this.price = p;
    return 10;
}

const p1 = new Product("mackBook", 2000);
console.log(p1); // when you use the this keyWord then automatice return this keyword if you also return any Number

const p2 = Product("mackBookNew", 2000000);
console.log(p2);


