// Problem 3: Driving Eligibility:

// Create a program to determine if a person is eligible to obtain a driver's license.
// If the person is 16 or older, check if they have passed the written test. If they
// have passed the written test, they are eligible for a driver's license; otherwise,
// they are not eligible.

age = 16
written_test_marsk = 51

if(age>=16){
    if(written_test_marsk>50){
        console.log("congrate you are eligible for driving licence")  
    }
    else{
        console.log("please clear your written test")
    }
}
else{
    console.log("sorry u r not eligible u r child")
}