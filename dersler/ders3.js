
let Employee = function (name,salary){

    this.name = name;
    this.salary = salary;
}

Employee.prototype.vergi =function (){
    let month = new Date().getMonth()+1;
    let tax = 0;
    total = this.salary * month;

    if(total <=20000){
        tax = total*0.2;
    }else if(total <=30000){
        tax = total*0.25;
    }else{
        tax = total*0.3
    }

    return {
        tax:tax,
        paid: total-tax
    }
}

let emp1 = new Employee("Görkem", 1500);
let emp2 = new Employee("Berkay", 30000);
let emp3 = new Employee("Gürkan", 45000)

let emp1_salary = emp1.vergi();
let emp2_salary = emp2.vergi();
let emp3_salary = emp3.vergi();

// console.log(emp1_salary)
// console.log(emp2_salary)
// console.log(emp3_salary)

console.log(`${emp1.name} adlı çalışana sene boyunca toplamda ${emp1.salary} TL ödeme yapılmış. 
Bunun ${emp1_salary.paid} TL'si kişiye kalan ${emp1_salary.tax} Tl'lik kismi ise vergi olarak 
devlet tarafından el konulmuştur`)

console.log("********************************************")

console.log(`${emp2.name} adlı çalışana sene boyunca toplamda ${emp2.salary} TL ödeme yapılmış. 
Bunun ${emp2_salary.paid} TL'si kişiye kalan ${emp2_salary.tax} Tl'lik kismi ise vergi olarak 
devlet tarafından el konulmuştur`)

console.log("********************************************")


console.log(`${emp3.name} adlı çalışana sene boyunca toplamda ${emp3.salary} TL ödeme yapılmış. 
Bunun ${emp3_salary.paid} TL'si kişiye kalan ${emp3_salary.tax} Tl'lik kismi ise vergi olarak 
devlet tarafından el konulmuştur`)

