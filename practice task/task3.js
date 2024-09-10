function countVowels (str){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i]))
            {
            count++;
        }
    }
    return count;

}

console.log(countVowels('America'));
console.log(countVowels('London'));
console.log(countVowels('Bangladesh'));
console.log(countVowels('Domsar'));