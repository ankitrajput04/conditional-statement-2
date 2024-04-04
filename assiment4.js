// Problem 4: Online Food Ordering:

// If the order total is $50 or more, the customer is eligible for free delivery.
// If the order total is less than $50, check the customer's loyalty status:
// If the customer is a loyalty member (yes/no), they are eligible for free
// delivery.
// If the customer is not a loyalty member, check the distance from the
// restaurant to the delivery address:
// If the distance is less than 5 miles, the customer is eligible for free
// delivery.
// If the distance is 5 miles or more, delivery is not free



var total_order = 49
var loyalti = true
var distance= 6

if(total_order<50){
    if(loyalti==true){
        console.log("congrate apko free dilevery di jaati hai")
    }
    
    else if(distance<5){
        console.log("congrate apko free dilevery di jaati hai")
    }
    else if(distance>5){
        console.log("sorry apko free dilevry nahi mil skti")
    }
}
else{
    console.log("free delevry for u")
}
