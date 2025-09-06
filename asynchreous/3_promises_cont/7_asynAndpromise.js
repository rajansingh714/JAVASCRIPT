
async function fun() {
        console.log("hare krishna");
        return 123;
}

let x =  fun();
console.log(x);


function gun() {
    return new Promise(function f(res, rej){
        console.log("jai Shree ram");
        res(7777);
    });
}

let y = gun();
console.log(y);




