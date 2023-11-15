function f1(){
    var tv={
        "Name":"Samsung TV",
        "Price": 45000.44,
        "Cities": ["Delhi","Hyd"],
        "Ratings":{Rate:4.2 , Count :5600},
        "Qty": 2,
        "Total":function(){
            return this.Qty*this.Price;
        }
    };
    console.log(`Name=${tv.Name}\nPrice=${tv.Price}\nCities=${tv.Cities.toString()}\nRating=${tv.Ratings.Rate}[${tv.Ratings.Count}]\nQty=${tv.Qty}\nTotal=${tv.Total()}`);
}
f1();