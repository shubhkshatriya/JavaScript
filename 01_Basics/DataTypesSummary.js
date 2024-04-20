
// #Primitive Data Types

    //7 types and it is call by value data type
    //7 types = String, Number, Boolean, null, undefined, symbol, BigInt
    const str = "shubham";
    const num = 123;
    const bool = true;
    const nll = null;
    const notDefined = undefined;
    const id = Symbol('123');
    const bigInt = 12310n;
    
    // console.log(bigInt)

// Javascript is staticly typed or dynamic typed language
    /* JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
       and we don't need to explicitly declare the type of a variable before using it. We can assign different types of values to a variable during its lifetime.
    */



// Reference (Non primitive)
    // Array, Object, Functions

    //Array
    const heros = ["Shaktiman", "Nagraj", "Dog"];

    //Object

        let myObj = {
            name : "Shubham",
            age : 22
        }

    //Function 
    const myFunction = function() {
        console.log("Function type");
    }


// ***********************************************Memories***********************************************



// Stack (Primitive), Heap(Non-Primitive)

let myName = "Shubham";

let anotherName = myName;
anotherName = "Ayush"
// console.log("My Name Is ", myName);
// console.log("Anoter Name Is ", anotherName);


let objCar = {
    name: "Hyndai",
    model : "Verna"
}

let objFlight = {
    name: "SpiceJet",
    model:"Mini"
}

objCar = objFlight
console.log(objCar);
console.log(objFlight);