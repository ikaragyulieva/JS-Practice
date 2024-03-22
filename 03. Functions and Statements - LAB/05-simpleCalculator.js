function simpleCalculator(num1, num2, operator){
    let calculation = getOperation(operator)

    console.log(calculation(num1, num2));

    function getOperation(operator){
        switch (operator){
            case 'multiply':
                return (num1, num2) => num1 * num2
            case 'divide':
                return (num1, num2) => num1 / num2
            case 'add':
                return (num1, num2) => num1 + num2
            case 'subtract':
                return (num1, num2) => num1	- num2
        }
    }
}



simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')