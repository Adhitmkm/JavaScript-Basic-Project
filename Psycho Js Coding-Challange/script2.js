// If the number 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total

// If all the numbers  from 1 to 20 (one hundred) inclusive were written out in words, how many letters would be used

console.clear()

let solution = (number)=>{
    let oneToNine = ["one","two","three","four","five","six","seven","eight","nine"]
    
    let tenToNineteen = ["ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let allNumbers = [...oneToNine,...tenToNineteen]
    console.log(allNumbers)

    if(number.toString().length && number.toString()[0] >= 2){
        alert("please enter a numbert below 20")
    }

    let selectedNumbers = allNumbers.slice(0,number) // slice arrayil ninn namuk vendath ethra aano etraposition to ethravarey.slice(0,number) //(startingpostion,ethra ano vendath ath)
    console.log(selectedNumbers)
    // let selectedNumbersLength = selectedNumbers.map((text)=>text.length)//map arayiley oro values ney seperately edukkan //map((ivadey enthum kodukkan name ith ulliley oro values ney represent cheyyunnu)=>representname piney enth aan vendath ippo lenghth .lengh)
    // totalSum = selectedNumbersLength.reduce((num,acc)=>num+acc); //ithum mapum venyl orumich eyuthaam
    let selectedNumbersLength = 
            selectedNumbers.map((text)=>text.length).reduce((num,acc)=>num + acc)
    
    return selectedNumbersLength
}



let result = solution(21)
console.log("The result is:",result)