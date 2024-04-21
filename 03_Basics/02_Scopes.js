



// if(true)
// {
//     let b = 20;
// }

// console.log(b);
// const array = [0,1,2,3,4,5,6,7,8,9];
// for (let index = 0; index < 6; index++) {
//     const element = array[index];
    
// }

// console.log("Index is :", index);



let user = {
    name: "Shubham",
    price: 1000,
    welcomeMessage : function() {
        console.log(`${this.name}, Welcome to the website`);
    }
}

user.name = "Ayush";
user.welcomeMessage()