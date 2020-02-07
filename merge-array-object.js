const arry1 = [{id:1}, {id:3}, {id:5}];
const arry2 = [{id:2}, {id:6}, {id:4}, {id:3}];
const merged = [...arry1, ...arry2];
// merged.map(item => item).filter();
/*

merged.map(item => item.id).filter((value, index, self) => {
    console.log(self.indexOf(value), "<===>", index);
    // console.log(index);
    self.indexOf(value) === index
})
*/

merged.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj["prop"]).indexOf(obj["prop"]) === pos;
})

// merged.filter((value, index, self) => self.indexOf(value) === index)
//     .map(mapObj => mapObj)


let array = [
    {greeting: "Hello", nickName : "Aziz"},
    {greeting: "Hello", nickName : "Aziz"},
    {greeting: "Hello", nickName : "test"}
];

let test = removeDuplicates(array, "nickName");
console.log(test);

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        console.log(obj);
        console.log(pos);
        return arr.map(mapObj => {let someVal = mapObj[prop]; return someVal}).indexOf(obj[prop]) === pos;
    });
}