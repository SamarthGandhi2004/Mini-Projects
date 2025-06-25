const UppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowercaseSet = 'abcdefghijklmnopqrstuvwxyz';
const NumberSet = '0123456789';
const SymbolSet = '!@#$%^&*()_+-=[]{}|;:,.<>?';




function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    console.log(length);

    const upperCase=document.getElementById('uppercase').checked;
    const lowerCase=document.getElementById('lowercase').checked;
    const numbers=document.getElementById('numbers').checked;
    const symbolChars=document.getElementById('symbols').checked;
    console.log(upperCase, lowerCase, numbers, symbolChars);

    if(!upperCase && !lowerCase && !numbers && !symbolChars){
        alert ('please select atleast one Character type');
        return;
    }
    if(upperCase || lowerCase || numbers|| symbolChars){
        let passwordSet="";
        if(upperCase){
            passwordSet=passwordSet + UppercaseSet;
        }
        if(lowerCase){
            passwordSet=passwordSet + LowercaseSet;
        }
        if(numbers){
            passwordSet=passwordSet + NumberSet;
        }
        if(symbolChars){
            passwordSet=passwordSet + SymbolSet;
        }
        let password="";

        console.log(passwordSet);


    }
}
