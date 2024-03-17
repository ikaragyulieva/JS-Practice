function stringOccurrences(text, word){
    let count = 0
    let words = text.split(' ')
    for (let w of words){
        if (word === w){
            count += 1
        }
    }
    console.log(count);
}

stringOccurrences('This is a word and it also is a sentence', 'is')
stringOccurrences('softuni is great place for learning new programming languages', 'softuni')