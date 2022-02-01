
// function welcome (){
//     let days = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
//
//     var today = new Date();
//
//     var msg = "Welcome. Today is " + days[today.getDay()]
//
//     return msg;
// }

(function (name){
    let days = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];

    var today = new Date();

    var msg = "Welcome " +name+ " Today is " + days[today.getDay()]

    console.log(msg)

}("Görkem"));

// console.log(welcome())
