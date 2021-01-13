(function () {
    'use strict'
    var generateBtn = document.querySelector(".btn-generate");
    var uppercaseOption = document.getElementById("uppercase");
    var lowercaseOption = document.getElementById("lowercase");
    var numbersOption = document.getElementById("numbers");
    var symbolsOption = document.getElementById("symbols");
    var result_view = document.querySelector(".result_view");
    var result_copy = document.querySelector(".result_copy");
    const passwordLength = 15;
    var generatedNewPassword;

    generateBtn.addEventListener("click" , generatePassword);
    window.addEventListener("load" , generatePassword);

    result_copy.addEventListener("click" , () =>{
        result_view.select();
        document.execCommand("copy");
        result_copy.innerHTML = "copied";
        setTimeout(() => {
            result_copy.innerHTML = "copy";
        }, 2000);
    });
    function generatePassword() {
        let withUppercase   = uppercaseOption.checked;
        let withLowercase   = lowercaseOption.checked;
        let withNumber      = numbersOption.checked;
        let withSymbols     = symbolsOption.checked;

        generatedNewPassword = randomLetters(withUppercase,withLowercase,withNumber,withSymbols);
        result_view.value = generatedNewPassword;
    }

    function randomLetters(upper ,lower, number ,symbol) {
        var myArray = getString(upper ,lower, number ,symbol)
        var newPassword = '';

        if (myArray[1]) {
            for (let index = 0; index < passwordLength; index++) {
                newPassword += myArray[0][Math.floor(Math.random() * myArray[0].length)];
            }
            return newPassword;
        } else {
            return "Please Check Any Options";
        }
    }
    function getString(upper ,lower, number ,symbol) {
        var string = '';
        var success = true;
        if ((upper || lower || number || symbol) == false) {
            console.log("Check any options");
            success = false;
            return ["Check Any Options",success];
        }
        if (upper) {
            string +='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (lower) {
            string +='abcdefghijklmnopqrstuvwxyz';
        }
        if (number) {
            string +='0123456789';
        }
        if (symbol) {
            string +='!@#$%&_+:?';
        }
        return [string,success];
    }
})();