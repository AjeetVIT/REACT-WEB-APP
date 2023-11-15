function Details(id, name ,price, stock, cities, rating){
    if(price==undefined){

        console.log(`
        Id=${id}\n
        Name=${name}\n
    
        Stock=${stock}\n
        Cities=${cities.toString()}\n
        Rating=${rating.rate}[${rating.count}]
        `);
    }else{
        console.log(`
        Id=${id}\n
        Name=${name}\n
        Price=${price}\n
        Stock=${stock}\n
        Cities=${cities.toString()}\n
        Rating=${rating.rate}[${rating.count}]
        `);
    }
   

}
Details(1,"Samsung TV",45000.44,true, ["pune","Hyd"] , {rate:4.2, count:4500});
console.log("==============================******************==========================")
Details(2,"Mobile",undefined,true, ["pune","Hyd"] , {rate:4.2, count:4500});