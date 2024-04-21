// function sayMyName () {
//     console.log('S');
//     console.log('H');
//     console.log('U');
//     console.log('B');
//     console.log('H');
//     console.log('A');
//     console.log('M');
// }

// sayMyName();

// ...<parameter name

    // function calculateCarPrice(...num1){
    //     return num1;
    // }

    // console.log(calculateCarPrice(299, 599, 10000,10500));

// __________________________________________________________________________________________
// Interview snipet

    // function calculateCarPrice(val1, val2, ...num1){
        //     return num1;
        // }
        
        // console.log(calculateCarPrice(299, 599, 10000,10500));

// ****************How to pass object to function*****************************


// const user = {
//     username:"Shubham",
//     price: 199,

// }

// function handleObject(anyObject){
//     console.log(`User Name is ${anyObject.username} and pricr is ${anyObject.price}`);
// }

// handleObject(user);
// handleObject({
//     username:"Ayush",
//      price: 1010
//     });


//*****************************How to pass array to function*****************************/

const myNewArray = [200,300,4000];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));