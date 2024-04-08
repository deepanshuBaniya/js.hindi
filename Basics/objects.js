const tinderuser = {
    name :"deepanshu kumar",
    email : "deepanshuk3678@gmail.com",
    address : "ramnagar van ",
    mobile_no : 954888888

}

// normal way to print 
// console.log(tinderuser.name)

// standered way 
// console.log(tinderuser["name"])
// console.log(tinderuser["email"])
// console.log( tinderuser["mobile_no"])




// write objects in the object

const user1 = {
    email : "gagan@1344",
    fulldetails :  {
        name : "gagan shrama ",
        address : "agra",
        education: {
            collage_pg : "Uttaranchal University",
            collage_ug : "agra",
            collage_12th : "noida"

        }
       

    } 
}

console.log(user1["fulldetails"])
console.log(user1.fulldetails.name)
console.log(user1.fulldetails.address)
console.log(user1.fulldetails.education.collage_pg)
