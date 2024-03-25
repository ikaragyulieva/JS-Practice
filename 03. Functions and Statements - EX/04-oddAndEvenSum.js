// function oddEvenSum(num){
//     let evenSum = 0;
//     let oddSum = 0;
//     for (let i = 0; i < num.toString().length; i ++){
//         if (Number(num.toString()[i]) % 2 === 0) {
//             evenSum += Number(num.toString()[i]);
//         } else {
//             oddSum += Number(num.toString()[i]);
//         }
//     }

//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
// }


// 2nd solution
function solve(num){
    const isEven = x => x % 2 === 0;
    const isOdd = x => x % 2 !== 0;

    const evenSum = calcualteDigitSum(num, isEven);
    const oddSum = calcualteDigitSum(num, isOdd);

    printResult(oddSum, evenSum);
}

function calcualteDigitSum(nummer, filter){
    const filteredDigits = nummer
    .toString()
    .split('')
    .map(Number)
    .filter(filter);

    const sum = filteredDigits.reduce((acc, digit) => acc+digit, 0);

    return sum;
}

function printResult(oddSum, evenSum){
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435)
solve(3495892137259234)