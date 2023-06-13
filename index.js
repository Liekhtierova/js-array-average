
//Довжина рядка з ...
function trunscate(str, strLength) {
    if (str.length <= strLength) { 
        return str;
    } else {
         const strNew = str.slice(0, strLength) +'...';
         return strNew;
        }
}


//Заборонені слова
const word1 = 'viagra';
const word2 = 'xxx';
function checkSpam(str) {  
    const str1 = str.toLowerCase();  
    if(str1.includes(word1) || str1.includes(word2)) {
        return true;
    } else {
        return false;
    }
}


//Паліндром
//const str = 'А роза упала на лапу Азора';
const str = 'nvmnmc NBNB mnmnу Азора';
function palindrom(str) { 
const strNew = str.toLowerCase();
const str1 = strNew.split(' ').join('');
const str2 = str1.split('').reverse().join('');
if(str1 === str2) {
    console.log('Ця фраза - "' + str + '" - є паліндромом');
}   else {
    console.log('Ця фраза - "' + str + '" - не є паліндромом');
}
}
