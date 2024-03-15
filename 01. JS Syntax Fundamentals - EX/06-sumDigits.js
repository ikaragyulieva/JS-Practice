function sumDigits(digit){
    let sum = 0;
    let end = digit.toString().length;
    for (let i = 0; i < digit.toString().length; i++){
        sum += Number(digit.toString()[i]);
    }

    console.log(sum);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)