function ticketType(day, age){
    if (day === 'Weekday'){
        if ((0 <= age && age <= 18) || (64 < age && age <= 122)){
            console.log('12$');
        } else if (18 < age && age <= 64){
            console.log('18$');
        }else{
            console.log("Error!");
        }
    } else if (day === 'Weekend'){
        if ((0 <= age && age <= 18) || (64 < age && age <= 122)){
            console.log('15$');
        } else if (18 < age && age <= 64){
            console.log('20$');
        }else{
            console.log("Error!");
        }
    } else{
        if (0 <= age && age <= 18){
            console.log('5$');
        } else if (64 < age && age <= 122){
            console.log('10$');
        } else if (18 < age && age <= 64){
            console.log('12$');
        }else{
            console.log("Error!");
        }
    }
    
}

ticketType('Weekday', 42)
ticketType('Holiday', -12)
ticketType('Holiday', 15)