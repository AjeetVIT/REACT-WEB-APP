function verifyPassword(password,success,error){
    if(password=="admin"){
        success();
    }else{
        error();
    }

}
verifyPassword("admin",function()
{
    console.log("Login Success..");
},function(){
    console.log("Invalid Password");
})