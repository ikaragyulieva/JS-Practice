function charactersInRange(a, b){
    let startIndex = 0;
    let endIndex = 0;
    let symbol_array = []
    
    if (checkIfSmaller(a.charCodeAt(0), b.charCodeAt(0))){
        startIndex = a.charCodeAt(0);
        endIndex = b.charCodeAt(0)
    } else{
        startIndex = b.charCodeAt(0);
        endIndex = a.charCodeAt(0)
    }

    for (let i=startIndex+1; i<endIndex; i++){
        symbol_array.push(String.fromCharCode(i))
    }

    console.log(symbol_array.join(' '));


    function checkIfSmaller(a, b){
        return a < b
    }
}

charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')