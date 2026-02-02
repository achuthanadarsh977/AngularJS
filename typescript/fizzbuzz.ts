


function fizzbuzz(n:number){


    if( n % 3 === 0 && n % 5 === 0){
        console.log("Fizzbuzz")
    }

    else if( n % 3 === 0){
        console.log("Fizz")
    }

    else if(n % 5 === 0){
        console.log("Buzz")
    }

}

fizzbuzz(10)

