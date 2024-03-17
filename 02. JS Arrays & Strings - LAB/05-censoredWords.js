function censoredWords(text, censored){
    while (text.includes(censored)){
    text = text.replace(censored, '*'.repeat(censored.length));
    }
    console.log(text);
}

censoredWords('A small sentence with some words', 'small')
censoredWords('Find the hidden word', 'hidden')