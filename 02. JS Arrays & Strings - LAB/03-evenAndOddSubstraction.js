function substraction(input){
    let sumEven = 0
    let sumOdd = 0
    for (let i=0; i<input.length; i++){
        if (input[i] % 2 === 0){
            sumEven += input[i]
        }else{
            sumOdd += input[i]
        }
    }
    console.log(sumEven-sumOdd);

}

substraction([1,2,3,4,5,6])
substraction([3,5,7,9])
substraction([2,4,6,8,10])