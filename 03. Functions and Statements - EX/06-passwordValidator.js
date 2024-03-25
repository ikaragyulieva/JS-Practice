function passwordValidator(password){
    if (!checkLength(password)){
        console.log("Password must be between 6 and 10 characters");
    }
    if (checkSymbols(password)){
        console.log("Password must consist only of letters and digits");
    }
    if (!checkDigits(password)){
        console.log("Password must have at least 2 digits");
    }

    if (checkLength(password) && !checkSymbols(password) && checkDigits(password)){
        console.log("Password is valid");
    }

    function checkLength(string){
        if (string.length >= 6 && string.length <= 10){
            return true
        }

        return false
    }

    function checkSymbols(string){
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(string)){
            return true
        }

        return false

    }

    function checkDigits(string){
        let pattern = /(\D*\d){2,}/g;
        
        if (pattern.test(string)) {
            return true;
        }

        return false;
    }

}

const isValidLength = password => password.length >= 6 && password.length <= 10;
const isAlphaNumeric = password => /^[a-zA-Z0-9]+$/.test(password);
const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;

function fancySolve(password){
    const validations = [
    [isValidLength, 'Password must be between 6 and 10 characters'],
    [isAlphaNumeric, 'Password must consist only of letters and digits'],
    [isStrong, 'Password must have at least 2 digits'], 
    ];

    const errors = validations
    .map(([validator, message]) => validator(password) ? '' : message)
    .filter(message => !!message)

    errors.forEach(message => console.log(message));

    if (errors.length === 0){
        console.log('Password is valid');
    }
}

fancySolve('logIn')
fancySolve('MyPass123')
fancySolve('Pa$s$s')