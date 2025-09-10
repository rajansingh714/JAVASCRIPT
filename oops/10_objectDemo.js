// let arr = [1,2,3,4,5];

// console.log(typeof arr); // in array key index and value index value 

// let obj = {
//     x: 10,
//     y: 20
// }

// Object.freeze(obj); // we can not update nor added extra element by using this function

// obj.x = 30;
// obj.z = 50;

// console.log(obj);
                            
// let obj1 = {
//     x: 10,
//     y:20
// }


// Object.seal(obj1); // you can not added new property but you can update old property

// obj1.x = 80;
// obj1.z = 90;

// console.log(obj1);

let obj3 = {
    x: 1,
    y: 2,
    x: 3,
    z: 5
}

let keys = Object.keys(obj3);
console.log(keys);


let values = Object.values(obj3);
console.log(values);

let enteries = Object.entries(obj3);
console.log(enteries);

