//
// const Person = {
//     firstName: "Görkem",
//     lastName: "Güler",
//     fullName: function (){
//         return `${Person.firstName} ${Person.lastName}`
//     }
// }
//

// console.log(Person.fullName())

let welcome = function (a,b){
    console.log('Welcome ' + this.name+a+b)
}

let gorkem = {name: "görkem"}
let fatma = {name: "fatma"}

welcome.call(gorkem,"ali","veli")
// welcome.call(fatma)
