function reverseNumbers(n, input){
    let array = []

    for (let i = 0; i < n; i++){
        array.push(input[i])
    }
    console.log(array.reverse().join(' '));

}

reverseNumbers(3, [10, 20, 30, 40, 50])
reverseNumbers(4, [-1, 20, 99, 5])
reverseNumbers(2, [66, 43, 75, 89, 47])
