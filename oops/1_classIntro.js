class Product {

    discount = 10; // data member

    constructor(n, p) {

        // constructor function to create new real life instances called as object
        // when we create an object this constructor is the first function that gets called

        this.name = n; // data member
        this.price = p; // data member
    }

    // data member is always use with this keyWord otherWise it gives an error
    // member function 
    displayProduct() {
        console.log(this.name, this.price, this.discount);
        
    }

    buyProduct() {

    }
}


let iphone = new Product("iphone", 10000);
let mackBook = new Product('mackbook', 20000);
console.log(iphone, mackBook);

iphone.displayProduct();




// let obj = {
//     name : "krishna", 
//     age: 25
// };

// function Product(n, p) {

//     this.name = n;
//     this.price = p;
//     return this;
// }

// const iphone = new Product('iphone', 200000);
// console.log(iphone);


