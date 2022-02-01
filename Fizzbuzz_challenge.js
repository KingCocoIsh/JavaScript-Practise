for (A=0; A<101; A++){
    if (A%3==0 && A%5==0){
        console.log("FizzBuzz")
    }else if (A%5==0){
        console.log("Buzz")
    } else if (A%3==0){
        console.log("Fizz")
    }
    else{
        console.log(A);
    }
}