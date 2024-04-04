// Problem 2: Marriage Eligibility Check:

// Create a JavaScript program to determine if a person is eligible for marriage
// based on their gender and age. If the person is male, check if he is 21 years or
// older; if yes, he is eligible. If the person is female, check if she is 18 years or
// older; if yes, she is eligible. Print a message indicating whether the person is
// eligible for marriage or not.



var Gender = "female"
var age = 20

if(Gender=="male"){
    if(age>=21){
        console.log("Tumhari age shadi ki ho gyi")
    }
    else{
        console.log("tum abhi  chhote ho ")
    }
}
else if(Gender=="female"){
    if(age>18){
        console.log("tumhari age shadi ki ho gyi")
    }
    else{
        console.log("tum abhi kaafi chhoti ho")
    }
} 
else{
    console.log("invalid gender")
}
    

