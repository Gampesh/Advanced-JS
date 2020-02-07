/*

Problem statement - phone number format should be (remove all the spaces and hyphens)
 123-456-789 - if all number can be distributed in 3s
 123-456-78-91 - if last disgit is alone and we can make last two digit in 2s.
 123-456-789-12 - if last disgit is is 2s and we can make last in 2s.
 123-12
 12-34

 123 or 12 - no hyphen for 2 or 3 digit inputs

 */

function phoneNumberFormat(input) {
    let formattedStr = input.replace(/[\. ,:-]+/g, '');
    let numberOfdigitToGroup = 3;
    let reminder = formattedStr.length%numberOfdigitToGroup;
    let secondPartOfStr = ''
    if(reminder > 0)
        secondPartOfStr=  removeEndDigitsToFormat(formattedStr, -((numberOfdigitToGroup - reminder)*2));

    console.log('[', secondPartOfStr, ']');
}

function removeEndDigitsToFormat(input, noOfDigitTobeRemoved){
    console.log('[', noOfDigitTobeRemoved, ']');
    return input.slice(noOfDigitTobeRemoved);
}


 phoneNumberFormat('12');
 //phoneNumberFormat('123');
//phoneNumberFormat('1234');
//phoneNumberFormat('12345');
// phoneNumberFormat('123456');
// phoneNumberFormat('1234567');
// phoneNumberFormat('12345678');
// phoneNumberFormat('123456789');
// phoneNumberFormat('1234567891');
// phoneNumberFormat('12345678912');

