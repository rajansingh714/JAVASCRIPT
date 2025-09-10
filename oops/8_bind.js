// const userDetail = {

//     name: "rajan",
//     homeTown: "sitamarhi",
//     display: function() {
//         console.log('my name is ', this.name , "homeTown is ", this.homeTown);
//     }
// };



// const obj = function() {
//     console.log(this.display());
// }

// console.log(obj);

// const result = obj.bind(userDetail);
// result();



const module = {
    x: 42,
    getX: function() {
        return this.x
    }
};


const unBoundGetX = module.getX;
console.log(unBoundGetX()); // it gives an undedefined

const boundGetX = unBoundGetX.bind(module);

boundGetX();


// bind function return a new function
