
let Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function (){
    return 2022- this.yearOfBirth;
}

let Teacher = function (name, yearOfBirth, job, subject){
    Person.call(this,name,yearOfBirth,job)
    this.subject = subject;
}

let gorkem = new Teacher('Görkem',1996,"Öğrenci","Yazilim")
console.log(gorkem)

