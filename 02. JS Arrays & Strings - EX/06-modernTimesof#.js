function hashtagModernTimes(input){
    let words = input.split(' ')
    let regexp = /(\d+)/g;
    for (let i = 0; i < words.length; i++){
        if (words[i].startsWith('#')){
            let matches = words[i].match(regexp);
            if (!matches && words[i].length > 1){

                console.log(words[i].substring(1, words[i].length));
            }

        }
    }

}

hashtagModernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
hashtagModernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')