const marvels_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["supermans", "flash", "batman"];

// marvels_heros.push(dc_heros);

// console.log(marvels_heros);

// Array.push can not combine two array it will directly add the array at last index

// const allHerso = marvels_heros.concat(dc_heros);
// console.log(allHerso);

//Sprade operator ...
    // const all_new_heros = [...marvels_heros, ...dc_heros]
    // console.log(all_new_heros); 

// Flat method
    // const parent_child_array = [1,2,3,[6,7,8],4,5,[11,12,13,[16,17,18],14,15]];
    // const flat_Array = parent_child_array.flat(Infinity);
    // console.log(flat_Array);


// console.log(Array.isArray("Shubham"));
// console.log(Array.from("Shubham"));

// console.log(Array.from({name:"Shubham"}));       // we need to provide which array we want key or value if we are trying to convert object into array 


const score1= 10;
const score2= 20;
const score3= 30;
const score4= 40;

console.log(Array.of(score1,score2,score3,score4));




