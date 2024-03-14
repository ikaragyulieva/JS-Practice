function mathOperations(numOne, numTwo, action){
    switch (action){
        case '+':
            console.log(numOne + numTwo);
        break;
        case '-':
            console.log(numOne - numTwo);
        break;
        case '*':
            console.log(numOne * numTwo);
        break;
        case '/':
            console.log(numOne / numTwo);
        break;
        case '%':
            console.log(numOne % numTwo);
        break;
        case '**':
            console.log(numOne ** numTwo);
        break;
    }
}

mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')