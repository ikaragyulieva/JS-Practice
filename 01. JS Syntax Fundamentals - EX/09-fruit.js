function fruit(fruitType, fruitWeight, price){
    console.log(`I need $${(price*(fruitWeight/1000)).toFixed(2)} to buy ${(fruitWeight/1000).toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)