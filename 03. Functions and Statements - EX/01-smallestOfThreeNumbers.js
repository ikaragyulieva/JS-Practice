function smallestNumber(a, b, c) {
    let checksmallest = (a, b) => a < b;
    let smallest = 0;
    
    if (checksmallest(a, b)){
        smallest = a
        if (checksmallest(c, a)){
            smallest = c
        }
    } else {
        smallest = b
        if (checksmallest(c, b)){
            smallest = c
        }
    }

    console.log(smallest);
}

smallestNumber(2, 5, 3)
smallestNumber(600, 342, 123)
smallestNumber(25, 21, 4)
smallestNumber(2, 2, 2)