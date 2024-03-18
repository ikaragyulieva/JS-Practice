function revealWords(string, template){
    let words = string.split(', ')
    for (let i=0; i < words.length; i++){
        template = template.replace('*'.repeat(words[i].length), words[i])
    }

    console.log(template);
}

revealWords('great', 'softuni is ***** place for learning new programming languages')
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')