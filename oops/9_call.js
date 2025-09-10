let player1 = {
    firstName: 'rajan',
    lastName: 'singh',
    luckyNumber: 7,
    Coder: 'No',
    getDetails: function() {
        console.log(this.firstName, this.lastName, "is a Devotees of Krishna ", this.luckyNumber," is luckyNumber", this.Coder, "NoCoder");
    }
}

const obj = function(x, y) {
    console.log(x + y);
    this.getDetails();
}

obj.call(player1, 25, 3);


// call function call a imediate a same function 

