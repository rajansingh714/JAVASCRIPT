var fun = "krishna";

function gun() {
    console.log("krishna");
}

// fun(); //it gives a type error
gun();  

function outerFunction() {
    const outerVar = "i am from outer";

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction();
}

outerFunction();

