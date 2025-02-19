
// challange 6 :
// Q- Mr. Luttapi going on secret mission.
//    He need your help but you have to learn how to encode a secret code
//    Create a function that takes an argument message and return 


// secretPassword("mattedabi") --> "asdfghj432"

// Rules
// ====================

// Step 2
// ---------------------
// Message length should be of nine characters containing 
// only Lowercase Letters from 'a' to 'z'.
// If the argument doesn't meet the requirement 
// you must return  "BANG! BANG! BANG!" ("Remember there are no")

// Step 2
// --------------------
// Divide the string into three equal parts of three
// characters each:
// 1 - mub
// 2 - ash
// 3 - rah

// Step 3
// --------------------
// Convert the first and third letter to the corresponding
// number, according to the English alphabets
// (ex. a = 1, b = 2, c = 3 ... z = 26, etc ).  // use ascii
// mub = 13u2

// Step 4
// --------------------
// Reverse the fourth, fifth and sixth letters;
// ash = hsa

// Step 5
// --------------------
// Replace seventh, eighth, and ninth letter with next 
// letter (z will be substituted with a).
// irh = jsi // i aanakil next lekker j r next s h next i

// Step 6
// --------------------
// Return the string in the following order;
// "Part_2+Part_3+Part_1"
// "hsaji13u2"

// See below examples for a better understanding:



// Password encoding && Regex

// secretPassword("abin") --> "abin123456"

// secretPassword("mattedabi") --> "asdfghj432"

// secretPassword("mattedabi") --> "BANG! BANG! BANG!"
// // Lenghth is not equal to 9
// // Contain characters other than Lower alphabets



// Solution

console.clear()

function isLowercaseOnly(userInput){
    const lowercaseOnly = /^[a-z]+$/g;
    const testPassed = lowercaseOnly.test(userInput)
    return testPassed;
}
console.log(isLowercaseOnly("mubashir"));

const secretPassword = (userInput)=>{
    // step 1 
    console.log(userInput.length)
    if(!isLowercaseOnly(userInput) || userInput.length != 9) console.log("BANG! BANG! BANG!")
    {
        console.log("BANG! BANG! BANG!")
    }
    // step 2
    // const splitedArr = userInput.match(/.{1,3}/g)
    // console.log(splitedArr) // namuk destructure aaki edukkam
    const [firstSet, secondSet, thirdSet] = userInput.match(/.{1,3}/g)



    // step 3 
    const firstSetPosStart = firstSet.split("")[0].charCodeAt() - 96  //split array use aakunnath [0]yil illa valiues ney split aakan
    const firstSetPosEnd = firstSet.split("")[2].charCodeAt() - 96
    const firstSetResult = [
        firstSetPosStart, 
        firstSet.split("")[0], 
        firstSetPosEnd
    ];
    console.log(firstSetResult)

    // step 4
    // console.log(secondSet)
    const secondSetResult = secondSet.split("").reverse()
    console.log(secondSetResult)

    // step 5
    let thirdSetResult = thirdSet.split('').map((letter)=>{
        // console.log(letter)
        if(letter == "z") return a;
        const result = String.fromCharCode(letter.charCodeAt() + 1)
        // console.log(test)
        return result

    
    })

    // step 6
    const password = [...secondSetResult, ...thirdSetResult, ...firstSetResult];
    return password.join("");  

    // console.log(thirdSetResult)

}


console.log(secretPassword("mubashirh") ) 


