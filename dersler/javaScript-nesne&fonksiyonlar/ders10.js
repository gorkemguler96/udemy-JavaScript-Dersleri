
let num = {
    min: 0,
    max: 100,
    checkNumericRange: function (value){
        if(typeof value !== "number"){
            return false;
        }else{
            return value >= this.min && value <=this.max;
        }
    }
}

let num1= {
    min:50,max:55
}

console.log(num.checkNumericRange(20))
console.log(num.checkNumericRange(-20))
console.log(num.checkNumericRange(100))
console.log(num.checkNumericRange.call(num1,54))
