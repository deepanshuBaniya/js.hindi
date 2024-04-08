// simple example
function loginuserMessage(username){

    return `${username} welcome to our webpage`
}
console.log(loginuserMessage("deepanshu"))



// with loops cconditions 
function loginuserMessage(username){
    if(username == null && " "){
        return "please enter the username first"
    }
    return `${username} welcome to our webpage`
}
console.log(loginuserMessage())


// use of rest operator using this opeator we can add more than one element in single prameter
function cart_allproducts_price(...num){
    return num
}
console.log(cart_allproducts_price(299 , 356, 567, 899))