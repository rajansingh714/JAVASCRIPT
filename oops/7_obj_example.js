let obj1 = {
    name: "RAJAN",
    company: "Unemploy",
    display: () => {
        console.log(this.name, "Works in", this. company);
    }
}


// obj1.display();

let obj2 = {
    name: 'rajan',
    company: 'MatheMatics',
    display: function() {
        console.log(this);
        setTimeout(() => {
            console.log(this.name, "stUdy", this.company)            
        }, 3000);
    }
}

obj2.display();


let obj3 = {
    name: 'pavitra',
    teacher: 'MatHs',
    display: () => {
        setTimeout(() => {
            console.log(this.name, "excellent in ", this.teacher);
        
        }, 3000);
    }
    
};



// obj3.display();

