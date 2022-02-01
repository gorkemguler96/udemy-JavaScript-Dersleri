
let val;

function MultipleBytwo (a,b,c,callback) {
    let arr = [];
    for (let i=0; i<3; i++){
        arr[i] = callback(arguments [i]*2)
    }
    return arr;
}

function addOne (a){
    return a+1;
}

val=MultipleBytwo(10,20,30,function (a){
    return a+15;
})

console.log(val)
