
// Function with Static Variables
function generateNumber() {
    if(!generateNumber.counter) {
        generateNumber.counter = 0
    }
    return ++generateNumber.counter;
}

generateNumber();

//Arguments Properties

const myFunction = function () {
    console.log('Current function: ', arguments.callee.name);
    console.log('Invoked by function: ', arguments.callee.caller.name);
};

void function  main (){
    myFunction()
}();

// Defining a Tag for template literals
function highlight(strings, ...values) {
    // here i is the iterator for the strings array
    let result = ''
    strings.forEach((str, i) => {
        result += str
        if (values[i]) {
            result += `<mark>${values[i]}</mark>`
        }
    })
    return result
}

const author = 'Henry Avery'
const statement = `I am a man of fortune & I must seek my fortune`
const quote = highlight`${author} once said, ${statement}`

// <mark>Henry Avery</mark> once said, <mark>I am a man of fortune
// & I must seek my fortune</mark>



// Getters & Setters

const user = {
    firstName: 'Nathan',
    lastName: 'Drake',

    // fullname is a virtual field
    get fullName() {
        return this.firstName + ' ' + this.lastName
    },

    // validate age before saving
    set age(value) {
        if (isNaN(value)) throw Error('Age has to be a number')
        this._age = Number(value)
    },
    get age() {
        return this._age
    }
}

console.log(user.fullName) // Nathan Drake
user.firstName = 'Francis'
console.log(user.fullName) // Francis Drake
user.age = '29'
console.log(user.age) // 29
// user.age = 'invalid text' // Error: Age has to be a number