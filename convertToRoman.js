
function convertToRoman(number) {

    var roman =  {"C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};
    var str = "";

    for (var key of Object.keys(roman) ) { // this will give us keys of deciman value
        var decimalVal = roman[key];
        var quotient = Math.floor(number / decimalVal); // getting the nearast highest value of number to be repeated
        number -= quotient * decimalVal; // subtracting the value which is already printed if number is > 0
        str += key.repeat(quotient);// To repeat number same number of time as we will be having quotient
    }
    return str;
}
