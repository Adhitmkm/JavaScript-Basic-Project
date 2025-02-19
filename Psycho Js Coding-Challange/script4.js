// challenge 4 : 

// Build  a function that create  histogram. Every bar need to be on a new line and its lenghth corresponds to the numbers in the array passsed as an argument. -
// The second argument of the function represents the character to be used for the bar.

// histogram (arr, char)

// Examples 
// ------------------
// histogram([1,5 3, 4], "#") -> "#\n###\n####"
// #
// #####
// ###
// #### // meley arayil ulla athra # aan eyuthunnath


// let histogram = (arr , char)=>{
//     let charRepeat = ''
//     for(let i=0; i<arr.length; i++) {
//         for(let j=1; j<=arr[i]; j++){
//             charRepeat += char
//         }
//         console.log(charRepeat)
//         charRepeat = ''
//     }
// }

// histogram([2,5,3],"#")

// another way


let histogram = (arr , char)=>{
    arr.map((number)=>
        console.log(char.repeat(number))) //simplest way
}

histogram([2,5,3],"#")




// let name = "adhi"
// console.log(name.repeat(3)) // repeat method use aakiyal repeat aayi values kittum