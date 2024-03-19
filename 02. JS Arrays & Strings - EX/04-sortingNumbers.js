function sortingNums(array){
    array.sort((a, b) => a - b); 
    let output= [];
    for (let i=1; i<=array.length; i+=2){
        lastElement = array.pop()
        array.splice(i, 0, lastElement)

    }

    return array
}

console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); 