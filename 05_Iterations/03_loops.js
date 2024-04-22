const coding =["JS","Ruby","Java","Paython","CPP"];

// coding.forEach( function(item){
//     console.log(item);
// });


// coding.forEach((item) =>{
//     console.log(item);
// })

// coding.forEach(printMe)


// function printMe(item) {
//     console.log(item);
// }


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
//  } )


const myCoding = [
    {
        languageName: "JavaScript",
        fileExtension :"js"
    },
    {
        languageName: "Paython",
        fileExtension :"py"
    },
    {
        languageName: "Text",
        fileExtension :"txt"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})