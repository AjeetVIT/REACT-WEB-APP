var products=[
    {Name: "TV",Category: "Electronics"},
    {Name: "Nike Casuals",Category: "Footwear"},
    {Name: "Mobile",Category: "Electronics"}

];
var Electronics =products.filter(function(product){
    return product.Category="Electronics";
});
var footwear=products.filter(product=>product.Category=="Footwear");
console.log(Electronics);
console.log(footwear);