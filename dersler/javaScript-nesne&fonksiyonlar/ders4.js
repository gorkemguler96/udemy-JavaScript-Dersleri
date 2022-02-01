
let personProto = {
    calculateAge : function (){
        return 2022- this.yearOfBirth
    }
}


let gorkem = Object.create(personProto);

    gorkem.name = "Görkem";
    gorkem.yearOfBirth = 1996,
    gorkem.job = "student";

    let fatma = Object.create(personProto,{
        name : {value : 'Fatma'},
        yearOfBirth: {value : 1994},
        job : {value : 'Proses'}
    })

console.log(gorkem)
console.log(gorkem.calculateAge())
console.log(fatma)
console.log(fatma.calculateAge())
