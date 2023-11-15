function Details(title,...productDetails){


    var[id,name,price,stock,cities,rating]=productDetails;

    console.log(`
    ${title}\n
    Id=${id}\n
    Name=${name}\n
    Price=${price}\n
    Stock=${stock}\n
    Cities=${cities.toString()}\n
    Rating=${rating.rate}[${rating.count}]
    `);
}
Details("Product Details",1,"TV",45000.44,true,["Delhi","Hyd"],{rate :3.5,count:5600});