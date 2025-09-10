const obj = {
    name: 'Krishna',
    display: function() {
        console.log(this, "is the calling site");
        console.log(this.name);
    }
}


const obj1 = {
    name: 'Krishna',
    display: () => {
        console.log(this, "is the calling site");
    }
}



obj.display();
obj1.display();

