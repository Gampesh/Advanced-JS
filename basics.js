// var onSale = true,
//     inventoryLevel = 12,
//     discount = 3;
// if (onSale && inventoryLevel > 10) {
//     console.log("We have plenty left");
// }
// if (onSale || discount > 0) {
//     console.log("Oh Sale!");
// } else {
//     console.log("Full price");
// }
//
// var rect = {
//     width: 100,
//     height: 50,
//     toString: function () {
//         return " Width: " + this.width + ", Height: " + this.height;
//     }
// };
// console.log(rect);
// console.log(" My Object rest is " + rect);
// console.log(" My Object rest is " + rect.toString);


function computeArea(radius) {
    return radius * radius * Math.PI;
}

console.log("Area is " + computeArea(3));


class Animal { 
    constructor (id, name) {
        this._ald = id;
        this._aName = name;
    }
    toString () {
        return "Animal > "+ this._ald +" Name "+ this._aName;
    }
 } 
class Dog extends Animal {
    constructor (id, name, weight, breed = "Poodle") {
     super(id, name);
     this._dWeight = weight;
     this._dBreed = breed;
    }
     toString () {
        return "Dog > " + super.toString() +" Breed "+ this._dBreed+" Weight " +this._dWeight;
    }
 }
 var dog = new Animal();
dog = new Dog(100, "Duke", "15k");
console.log(dog.toString());