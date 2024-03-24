function loadingBar(num){
    let arr = []
    for (let i = 1; i<=10; i++){
        if (i <= num/10){
            arr.push('%')
        }else{
            arr.push('.')
        }
        
    }

    
    if (num === 100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }else{
        console.log(`${num}% [${arr.join('')}]`);
        console.log('Still loading...');
    }
}

loadingBar(30)
loadingBar(50)
loadingBar(100)