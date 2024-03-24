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

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')