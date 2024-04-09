const salary = 100000

// simple way 
// if(salary < 5000){
//     console.log("amount is too less than 100000");
// }else if(salary < 6500){
//     console.log("amount is oo less than ");
// }else{
//     console.log("amount is too high")
// }


// we can aslo write if condition like this 
if(salary < 100) console.log("amount is too high");




///
const userlogedin = true;
const debit_card = true;
const email = true;
const mobile = false;

// in this case if all the values is true after than its is run
if(userlogedin && debit_card && email){
    console.log("user is ready to do shopping")
}

//
if(userlogedin || debit_card || email || mobile){
    console.log("verfiying is done")
}