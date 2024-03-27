function phoneBook(string){
    let phoneEntries = {};
    for (let line of string){
        let [name, phoneNumb] = line.split(' ');
        phoneEntries[name] = phoneNumb;
    }

    for (key in phoneEntries){
        console.log(`${key} -> ${phoneEntries[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'])