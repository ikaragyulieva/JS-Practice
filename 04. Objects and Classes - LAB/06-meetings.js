function meetings(input){
    let schedule = {};
    for (dayLine of input){
        let [day, name] = dayLine.split(' ');
        if (schedule[day]){
            console.log(`Conflict on ${day}!`);
            continue;
        }

        schedule[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for (key in schedule){
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])