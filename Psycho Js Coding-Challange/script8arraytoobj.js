//challange 8:

// You are a dictionery of names and the amount of points they have. Return a dictionary with the same names, but insted of points,return what prize they get. 

// "Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectivly. For all the other nmaes, return "participation" for the prize

// awardPrizes({
//     "Joshua" : 45,
//     "Alex" : 39,
//     "Eric" : 43
// }) --> {
//     "Joshua" : "Gold",
//     "Alex" : "Bronze",
//     "Eric" : "Silver"
// }

// awardPrizes({
//     "Person A" : 1,
//     "Person B" : 2
// })

// awardPrizes({
//     "Person A" : 1,
//     "Person B" : 2,
//     "Person C" : 3,
//     "Person D" : 4,
//     "Person E" : 5
// }) --> {
//     "Person A" : "Participation",
//     "Person B" : "Participation",
//     "Person C" : "Bronze",
//     "Person D" : "Silver",
//     "Person E" : "Gold"
// }

// Notes
// -----------

// There will always be at least three participants to recieve awards.
// No number of points will be the same amongst participants

// Solution
// object have entries values keys
console.clear()

function awardPrizes(names) {
    const [Gold, Silver, Bronze] = Object.values(names).sort((num1,num2)=>num2-num1); // ith rand parameter edukkum ath baseil aan cheruthil ninn valuthileykk// sort vech namuk sort cheyyam  large to small small to large valuthil ninn cheuthileyk num2- num1 nerey thirich ittal cheruthil ninn valuthileykk
        console.log(Gold)

    const namesArr = Object.entries(names); // ippo ith ellam koodey oru array aan ini ithiney oroniney seperate array aakanam athin .map  use aakam
    console.log(names)
    const results = namesArr.map(([name,score])=>{
        console.log(name)

        switch(score){
            case Gold :
                return [name,"Gold"]
            case Silver :
                return [name,"Silver"]
            case Bronze :
                return [name,"Bronze"]
            default :
                return [name,"Participation"]
        }
    }); // ippo namuk kitttiyath array formatil aan but namuk vendath object formatil aan answer vendath

    const finalResults = Object.fromEntries(results)
    console.log(finalResults);
  
}




awardPrizes({
        "Joshua" : 45,
        "Alex" : 39,
        "Eric" : 43
    })

    console.log(Object.values())




//Array of Arrays to Object
// array enghaney object aakam
//eg 

const object1 = [
    ["js diary",60],
    ["code mlm",70]
]// ithan array of array arraykk ullil array

const storeHere = Object.fromEntries(object1) //Object.fromEntries arrayey object aakan .fromEntries
console.log(storeHere)

