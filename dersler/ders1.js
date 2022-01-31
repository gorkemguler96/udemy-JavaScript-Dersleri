// function Person (name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function (){
//         return 2022 - this.yearOfBirth;
//     }
//
//     console.log(this)
// }

let Person = function (name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function (){
        return 2022 - this.yearOfBirth;
    }

    console.log(this)
}

let gorkem = new Person("Görkem",1996,"Student")
console.log(gorkem.job)
console.log(gorkem.calculateAge())
