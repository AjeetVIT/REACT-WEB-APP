function Factorial(n)
{
    if(n<=0){
        return 1;
    }else{
        return n*Factorial(n-1);
    }
}
console.log("Factorial of 5 is "  + Factorial(5));
const hello=()=>{console.log("Hello JavaScript");console.log("Welcome")};
hello();
const Hello=username=>`Hello !${username}`;
console.log(Hello("Ajeet"));
