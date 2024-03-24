function oddEvenSum(num){
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < num.toString().length; i ++){
        if (Number(num.toString()[i]) % 2 === 0) {
            evenSum += Number(num.toString()[i]);
        } else {
            oddSum += Number(num.toString()[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435)
oddEvenSum(3495892137259234)