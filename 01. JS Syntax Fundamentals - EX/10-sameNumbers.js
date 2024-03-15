function sameNumbers(num){
    let previousNum = Number(num.toString()[0])
    let isTrue = true
    let sum = Number(num.toString()[0])

    for (let i=1; i < num.toString().length; i++){
        if (previousNum != Number(num.toString()[i])){
            isTrue = false
        }

        previousNum = Number(num.toString()[i])
        sum += Number(num.toString()[i])

    }
    console.log(isTrue);
    console.log(sum);
}

sameNumbers(2222222)
sameNumbers(1234)