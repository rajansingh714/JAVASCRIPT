var teacher = 'Rajan singh';

function fun() {
    var teacher = "swag";
    console.log(teacher,assistantteacher); // it lines gives throw error because assistantteacher is not defined and it is also called undeclared
    assistantteacher = "singh";
}

function gun() {
    console.log(subject);
    var subject = "DSA"; 
    console.log(subject);
}

gun();
console.log(teacher);
fun();

