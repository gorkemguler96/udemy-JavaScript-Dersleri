
function isDriver(...years){
    years.forEach(year=>console.log((2022-year) >= 18 && (2022-year)<=65))
}

isDriver(1956,2006,1996)

var a,b,rest;

[a,b] = [10,20];
[a,b,...rest]= [10,20,30,40,50,60]
console.log(rest)


({a,b,...rest} = {a:10, b:20,c:30,d:40})
console.log(rest)
