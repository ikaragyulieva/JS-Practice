function vacation(group, type, day){
    let pricePerNight 
    let discount = 0
    switch (type) {
        case 'Students':
            if (day == 'Friday'){
                pricePerNight = 8.45;
            }else if (day == 'Saturday'){
                pricePerNight = 9.80;
            }else if (day == 'Sunday'){
                pricePerNight = 10.46
            }

            if (group >= 30){
                discount = 0.15
            }

            break;
        case 'Business':
            if (day == 'Friday'){
                pricePerNight = 10.90;
            }else if (day == 'Saturday'){
                pricePerNight = 15.60;
            }else if (day == 'Sunday'){
                pricePerNight = 16
            }

            if (group >= 100){
                group -= 10
            }

            break;
        case 'Regular':
            if (day == 'Friday'){
                pricePerNight = 15;
            }else if (day == 'Saturday'){
                pricePerNight = 20;
            }else if (day == 'Sunday'){
                pricePerNight = 22.50
            }

            if (group >= 10 && group <= 20){
                discount = 0.05
            }

            break;
    }

    console.log(`Total price: ${((pricePerNight*group)-((pricePerNight*group)*discount)).toFixed(2)}`);

}

vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")