function converter(string){
    let converted = JSON.parse(string);
    let entries = Object.entries(converted)

    for(let [key, value] of entries){
        console.log(`${key}: ${value}`);
    }
}

converter('{"name": "George", "age": 40, "town": "Sofia"}')
converter('{"name": "Peter", "age": 35, "town": "Plovdiv"}')