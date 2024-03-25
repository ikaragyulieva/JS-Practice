function nxnMatrix(n){
    let matrix = []
    for (let i=0; i < n; i++){
        matrix.push([])
        for(let j=0; j < n; j++){
            matrix[i].push(n)
        }
    }

    matrix.forEach(v => console.log(...v))
}

nxnMatrix(3)
nxnMatrix(7)
nxnMatrix(2)