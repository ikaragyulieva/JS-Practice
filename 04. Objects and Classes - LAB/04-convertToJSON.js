function converter(firstName, lastName, hairColor){
    let object = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let convertedObj = JSON.stringify(object);
    console.log(convertedObj);
}

converter('George', 'Jones', 'Brown')
converter('Peter', 'Smith', 'Blond')