// Write code that calculates the final grade (A, B, C, D, or F) for a student.



var math = 60
var Eng = 50
var sci = 50
var sans = 72
var ss = 70
var hin = 50

var total = (math+Eng+sci+sans+ss+hin)
console.log(total)
if(total>400){
    console.log("Your Grad A")
}
else if(total>300){
    console.log("Your Grad is B")
}
else if(total>200){
    console.log("Your Grad is C")
}
else if(total>100){
    console.log("Your Grad is D")
}
else{
    console.log("Your Grad is F")
}