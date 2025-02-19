// challange 9 :

// Check for Anagrams (a word, phrase, or name formed by rearranging)

// Create a function that takes two string and returns either true or false 
// Create 2 input $ a button in the UI . The function will get the input 

// Notes 
// 1) Should be case insensitive.
// 2) The two given Strings can be of diffrent lengths.

// Example 
// isAnagram("Cristian", "Cristina") --> true

// isAnagram("Dave Barry", "Ray Adverb") --> true

// isAnagram("Nope", "Note") --> false

// solution

console.clear()

const formEl = document.getElementById('form')
const inputOneEl = document.getElementById('val1')
const inputTwoEl = document.getElementById('val2')
const submitBtnEl = document.getElementById('submit')
const messageEl = document.getElementById('message')

function getData(e) {
e.preventDefault();

const inputOneVal = inputOneEl.value    // oru input value edukkan .value use aakuka
const inputTwoVal = inputTwoEl.value
console.log(inputOneVal,inputTwoVal)

if(isAnagram(inputOneVal,inputTwoVal)){
    messageEl.innerHTML = "Yes this text are Anagrams"
}else{
    messageEl.innerHTML = "No this text Not a  Anagrams"
}

}

formEl.addEventListener("submit",getData);



function isAnagram (text1,text2){
    const text1AsArr = text1.trim().toLowerCase().split("").sort()// .split("") eg oru string und athinet array aakam.  "Cristian" ee oru string  inghaney kittum ['C', 'r', 'i', 's', 't', 'i', 'a', 'n'] //.join("" koduthal ellam orumich aavum )
    // console.log(text1AsArr)
    const text2AsArr = text2.trim().toLowerCase().split("").sort()
    return Array.isArray(text1AsArr)&&     // oru array array aano check cheyyan aan is array use aakunnath Array.isArray() // true aan consolil kanukunnath enkil aan
        Array.isArray(text2AsArr) && 
        text1AsArr.length === text2AsArr.length &&
        text1AsArr.every((val,index)=> val === text2AsArr[index])  // every(val,index) ith vech 2 arrayil ulla values compare cheyyan pattum // working athyathey array edukkum 2 mathey arrayumcompare cheyyum index vechitt ith return cheyunnath true of false value aan
        ? true
        :false
}

// isAnagram("Cristian", "Cristina")
 

