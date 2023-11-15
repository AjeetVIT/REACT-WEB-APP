function f1(){
    var values=["Ajeet",10,true,["Hyd","Delhi"],function(){console.log("Hello!")}];
    var[name,id,stock,cities,hello]=values;
    console.log(cities[1]);
    hello();
}
f1();