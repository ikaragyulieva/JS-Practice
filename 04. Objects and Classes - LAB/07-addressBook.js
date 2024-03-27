function addressBook(input){
    let addBook = {}

    for (line of input){
        let [name, address] = line.split(':');
        addBook[name] = address;
    }

    let entries = Object.entries(addBook);
    entries.sort((a, b) => {
        keyA = a[0]; 
        keyB = b[0];
    });

    for (key of entries){
        console.log(`${key} -> ${entries.key}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)