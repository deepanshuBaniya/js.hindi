let mydate = new Date()
 console.log(mydate.toDateString())
 console.log(mydate.toTimeString())

// // petten to save the date manually 
 let mycreateddate = new Date("2024-01-11")
 console.log(mycreateddate.toDateString())
 console.log(mycreateddate.toLocaleString())

// date with time
let mytime = new Date(2024 , 0 , 11 , 5 , 30)
console.log(mytime.toLocaleString())
