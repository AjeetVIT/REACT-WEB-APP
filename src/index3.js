function f1()
{
    var username="john";
    var age = 22;
    var msg1 = "Hello !" + " "+ username + " "+ "you will be "+" "+ (age+1)+ " "+"next year.";
var msg2 =`Hello ! ${username} you will be ${age+1} next year. `;
    console.log(msg1);
    console.log(msg2);
    var x;
    console.log("x="+x);
}
f1();