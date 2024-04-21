// Singleton
//

let mySymbol = Symbol("Key@1");

let JsUser = {
    name: "Shubham",
    "email": "shubhampahilwan@gmail.com",
    [mySymbol]: "Sym",
    isLoggedin: false,
    lastLoggedinDay: ["Monday", "Friday"]
};

// console.log(JsUser);

// JsUser.email="Dipak@DeutscheBank.com"
// Object.freeze(JsUser);
// JsUser.email = "XYZ@PPP.com"
// console.log(JsUser);



// JsUser.greeting = function() {
//     console.log("Hello From Function");
// }

// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(JsUser.greetingTwo());