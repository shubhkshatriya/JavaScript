// const chai = function () {
//     let username = "Shubham";
//     console.log(this.username); // this works with object only. 
// }

// const chai = () => {
//     let username = "Shubham";
//     console.log(this.username); // this works with object only. 
// }


// chai();

// Basic Arrow function
// const addTeoNum = (num1, num2) => {
//     return num1 + num2 ;
// }

// implicit return
// const addTeoNum = (num1, num2) => num1 + num2 ;
//  const addTeoNum = (num1, num2) => (num1 + num2) ;    // if we use {} then return statement is mandatory. with () return is not required

const addTeoNum = (num1, num2) => ({username: "Shubham"}) ;


console.log(addTeoNum(2, 4));