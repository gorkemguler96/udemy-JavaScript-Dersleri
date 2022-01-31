let Person = function (name,yearOfBirth,job){

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function (){
    return   2022-this.yearOfBirth;
}

Person.prototype.getName =function (){
    return this.name;
}

Person.prototype.lastName= "Güler";



let gorkem = new Person("Görkem",1996,"Student")
console.log(gorkem)
console.log(gorkem.calculateAge())
console.log(gorkem.getName())
console.log(gorkem.hasOwnProperty('lastName'))
