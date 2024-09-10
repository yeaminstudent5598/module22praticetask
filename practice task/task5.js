function getRandomNumber(){
    const randomNum = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    return randomNum;
}

console.log(getRandomNumber());