const UppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowercaseSet = 'abcdefghijklmnopqrstuvwxyz';
const NumberSet = '0123456789';
const SymbolSet = '!@#$%^&*()_+-=[]{}|;:,.<>?';



function getRandomData(dataSet){
   return dataSet[Math.floor(Math.random()*dataSet.length)];
}

function generatePassword(password="") {
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
      
        if(upperCase){
           password += getRandomData(UppercaseSet);
        }
        if(lowerCase){
            password += getRandomData(LowercaseSet);
        }
        if(numbers){
            password += getRandomData(NumberSet);
        }
        if(symbolChars){
           password += getRandomData(SymbolSet);
        }
        if(password.length<length){
            return generatePassword(password);
        }


        // if(password.length>length){
        //     password= password.slice(0,length);
        // }

        // if(password.length>length){
        //     let subStr=password.substring(0,length);
        //     password = subStr;
        // }

        if(password.length>length){
            let finalPass="";
            let difference = password.length - length;
            let loop=password.length -difference;
            console.log(difference, loop);
            for(let i=0; i<loop;i++){
                   finalPass=finalPass+ password[i];
            }
            password = finalPass;
        }
        document.getElementById('password').value = password;

    }


 
 console.log(password);
}


function copyPassword(){
    navigator.clipboard.writeText(document.getElementById('password').value);
    alert("Password copied to clipboard");
}