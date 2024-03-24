function factorialDivision(numOne, numTwo){

    let factorialOne = calculateFactorial(numOne);
    let factorialTwo = calculateFactorial(numTwo);

    console.log((factorialOne/factorialTwo).toFixed(2));

    function calculateFactorial(num){
        let result = num;
        while (num > 1){
            num --;
            result *= num;
        }

        return result
    }
}

factorialDivision(5, 2)
factorialDivision(6, 2)