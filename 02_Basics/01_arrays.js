// Array
const myArray = [10,19,77,59,true,"Shubham"];
const arr = [1001,1100,1023];

// console.log(myArray);


// Array Methods
    // myArray.push(6);
    // myArray.pop()
    // console.log(myArray);

    //unshift   add elements at oth index of the array
        // myArray.unshift(3);
        // console.log(myArray);
    
    //Shift removed 0th index element if the array
        // myArray.shift();
        // console.log(myArray);

    //indexOf gives us index. but suppose we provided index of the element which is not in the array then we get ans -1
        // console.log(myArray.indexOf(10));

    // Join => join return string obj
        // const newArray = myArray.join()
        // console.log(newArray);

    // slice, splice
        // slice gives us the element-1  specified within given range. but the original array kept as it is
        // splice gives us the element-1  specified within given range. and removes this range from original array
        //
    console.log("Initial Array ", myArray);
    const myN1 = myArray.slice(0,3)
    console.log("Slice Array" ,myN1);
    console.log("Initial Array After Slice" ,myArray);

    console.log('_______________________________________________________');
    const newSpliceArray = [301,302,303,304,305];
    console.log("Initially New Splice Array ", newSpliceArray);
    const spl = newSpliceArray.splice(0,3);

    console.log("Splice Array", spl);
    console.log("Array after Splice", newSpliceArray);
