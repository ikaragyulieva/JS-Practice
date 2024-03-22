function orders(product, quantity) {
    console.log((getPrice(product) * quantity).toFixed(2));
}

function getPrice(product){
    switch (product){
        case 'coffee':
            return 1.5
        case 'water':
            return 1
        case 'coke':
            return 1.4
        case 'snacks':
            return 2
    }
}

orders("water", 5)
orders("coffee", 2)