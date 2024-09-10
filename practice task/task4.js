function findLongWord(word){
    const words = word.split(' ');
    let longesword = "";

    for(let i = 0; i < words.length; i++){
        if(words[i].length > longesword.length){
            longesword = words[i];

        }
    }
    return longesword;
}

const wordone = findLongWord('i am a good progammer and you');
console.log(wordone);