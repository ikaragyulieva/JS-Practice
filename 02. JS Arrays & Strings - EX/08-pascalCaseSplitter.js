function splitter(input){
    let regLiteral = /[A-Z]/g;
    let result = input.replace(/([A-Z][a-z])/g,' $1').replace(/(\d)/g,' $1');
    result = result
    .trim()
    .split(' ');

    console.log(result.join(', '));
}

function solve(input){
    let matches = input.matchAll(/[A-Z][a-z]*/g);
    let words = Array.from(matches).map(match => match[0])

    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')