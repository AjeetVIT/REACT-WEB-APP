function products(){
    return [
        {Name : "TV",Price:67000.44},
        {Name: "Mobile",Price:13000.45}
    ]
};
for(var item of products()){
    console.log(`${item.Name}-${item.Price}`);
}