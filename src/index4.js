function f1(){
    var values=["A",10,true,["Hyd","Delhi"],function(){console.log("Hello!")}];
    console.log(values[3][1]);
    values[4]();
    var cities= values[3];
    var n=values[1];
}
f1();