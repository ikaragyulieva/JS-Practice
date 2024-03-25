function palindromeIntegers(array){
    for (let i = 0; i < array.length; i++){
        if (palindromCheck(array[i])){
            console.log('true');
        }else{
            console.log('false');
        }
    }

    function palindromCheck(number){
        isPalindrom = true;
        numToCheck = number.toString()
        for (let i = 0; i < (numToCheck.length)/2; i++){
            let firstDigit = numToCheck[i];
            let check = numToCheck.length - i;
            let lastDigit = numToCheck[numToCheck.length - 1 - i];
            if (firstDigit != lastDigit) {
                 return isPalindrom = false
            }
        }

        return isPalindrom
    }

}

// 2nd solution

function solve(nums){
    nums.forEach(printPalindromeResult)
}

function isPalindrom(number){
    const forwardNum = number.toString();
    const backwardsNum = forwardNum.split('').reverse().join('');
     
    return forwardNum === backwardsNum
}

function printPalindromeResult(number){
    console.log(isPalindrom(number));    
}

solve([123,323,421,121])
solve([32,2,232,1010])