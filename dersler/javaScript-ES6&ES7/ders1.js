
let numbers = [10,20,30];

console.log([...numbers])
console.log(numbers)

let arr1 = ['two','three'];
let arr2 = ['one','four','five'];

arr2.push(...arr1)
arr2.unshift(...arr1)

let arr3 = ['one',...arr1,'four','five']

console.log(arr2)
console.log(arr3)
