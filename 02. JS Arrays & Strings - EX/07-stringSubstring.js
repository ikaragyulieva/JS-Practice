function stringSubstring(word, text){
    let sentence = text.split(' ');
    let isfound = false;
    for (let i=0; i<sentence.length; i++){
        if (word.toLowerCase() === sentence[i].toLowerCase()){
            isfound = true;
            break
        }
    }

    if (isfound){
        console.log(word);
    } else{
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript','JavaScript is the best programming language')
stringSubstring('python','JavaScript is the best programming language')