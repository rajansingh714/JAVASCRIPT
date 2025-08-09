function fun() { // it is a function definition
    // it is function defination  
}

let x = function fun(){
    // it is function expression
}
// if the first word is not start with a function word and starting with the other word that can we say is function expression
// even this is function expression
//(fun() {});// not a function expression

var fact = function(n){ //function expression
    if(n === 0)
    return 1;
    return n * fact(n-1);
}

console.log(fact(5));
