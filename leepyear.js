/*
*year will be e leep year if the year is divisiable by 4
*/

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    } 
    else {
        return false;
    }
}
const islipi = isLeapYear(2052);
console.log(islipi);


/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4:
 * 2.
 */


function isLeapYear2(year){
    if (year % 100 !== 0 && year % 4 === 0){
        return true;

    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true
    }
    else {
        return false;
    }

}
