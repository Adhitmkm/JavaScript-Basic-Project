// challange 5 :
// Q- we have defined a function named rangeOfNumbers with two parameters.
//    The function should return an array of integers which begins with a number
//    represent by the startNum parameters and ends with a number represented by the
//    endNum parameter. The starting number will always be less than or equal to the ending number.


// SHOUD NOT USE ANY KIND OF LOOPS

// It should also work for cases where both startNum and endNum are the same 

// Solution 

// namuk jst loop vech nokam first
// console.clear
// const rangeOfNumbers = (startNum, endNum)=>{
//     let numbersArr = []

//     for(let i=startNum; i<=endNum; i++){
//         numbersArr.push(i)
//     }
//     console.log(numbersArr)
// }
// console.log(rangeOfNumbers(3,10))



console.clear()
let numbersArr = []
const rangeOfNumbers = (startNum, endNum)=>{

    if(startNum > endNum) 
    return 
        if(startNum <= endNum){
            numbersArr.push(startNum)
            startNum = startNum + 1
        }
        
        rangeOfNumbers(startNum,endNum) // ithan recurtion oru functioney veendu veendum repeat aayi vilikkan patum // reserch more
        return numbersArr
}
console.log(rangeOfNumbers(3,10))

