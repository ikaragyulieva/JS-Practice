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

palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])