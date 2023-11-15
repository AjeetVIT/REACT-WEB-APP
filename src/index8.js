function f1(){
    var Id=Symbol("Id");
    var product={
        "Name": "TV",
    
        "price": 45000.44,
        [Id]:3,
        [Id]: 4,
    };
    console.log(product[Id]);
}
f1();