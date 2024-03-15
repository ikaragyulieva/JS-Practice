function cooking(num, op1, op2, op3, op4, op5){
    let currentAction
    let actions = [op1, op2, op3, op4, op5]
    for (let i = 0; i < 5; i++){
        currentAction = actions[i]
        switch (currentAction){
            case 'chop':
                num /= 2;
            break;
            case 'dice':
                num = Math.sqrt(num);
            break;
            case 'spice':
                num += 1;
            break;
            case 'bake':
                num *= 3;
            break;
            case 'fillet':
                num -= (num * 0.2);
            break;
        }

        console.log(num);

    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')