// js bts
// execution context
let num1 = 10
let num2 = 10
function add(num1,num2){
return num1+num2
}
console.log(add(num1,num2))
console.log(add(10,20))



//1 - global execution context js m sb kch gec mn jata hay
// 2- memory, js m sb variables store hoty hen as undefined , funct as definition lkin kisi b chz ki value assign nh hote
// 3- execution- js m vars ko vale assign hoti hay and execution hota hay

// neechy jesy ap chrome par likho to phly one ko call kro to wo call stack mn jaega phr two ko call kro wo jaega three ko kro wo jaega one k andr tywo hay r two k andr three hay to phly one calll stack m jaega phr usk andr ka 2 phr bhr,phr two andr usk andr ka three andr , one ko call kro gy to 3non aengy phr three tak jao to callstack khali hojaega 




function  one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}
one()
two()
three()
// phly call stack mn individual funct call hoga phr uski value lagay gi phr usk andr ka element dkh k dono st krdye jaen gy phr next funct call hoga uski value assign usk andr funct dekho value lo ...yani separate thread banay ga hr funct darr funct k lye 