function todo(task){
    console.log("Start todo");
    setTimeout(function fun(){
        console.log('completed', task);
    }, 3000);
    
    console.log("End of todo");
}

console.log("Starting");
todo("assignment");
console.log("Ending");