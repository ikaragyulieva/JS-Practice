function splitter(input){
    let regLiteral = /[A-Z]/g;
    let result = input.replace(/([A-Z][a-z])/g,' $1').replace(/(\d)/g,' $1');
    result = result
    .trim()
    .split(' ');

    console.log(result.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
splitter('HoldTheDoor')
splitter('ThisIsSoAnnoyingToDo')