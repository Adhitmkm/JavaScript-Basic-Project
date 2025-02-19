
console.clear()

// function solution(number){
//     let multipleOfThrees = []
//     let multipleOfFive = []

//     for (let i=1; i<number; i++) {
//         if(i%3 == 0 ){
//             multipleOfThrees.push(i)
//         }
//         if(i%5 == 0){
//             multipleOfFive.push(i)
//         }
//     }

//     console.log(multipleOfThrees)
//     console.log(multipleOfFive)

    // let sumOfThrees = multipleOfThrees.reduce((num,acc)=> num + acc)// reduce function use cheyyunnath values reduce cheyyan aan ee reducil 2 value sett cheyyan pattum .reduce((1-num,2-accumulator)) reduce cheyyunnath athyathathum 2 mathathum kootum + ath naccumulatoril store cheyyum pinney aa acumulator plus + next value kootum+ ath acumulatoril store cheyyum anghaney an reduce work avunnath

    //     console.log("sumOfThreesis",sumOfThrees)

    // let sumOfFive = multipleOfFive.reduce((num,acc)=> {num + acc})
    // console.log("sumOfFive",sumOfFive)

    // let arrayOfThreeAndfive = [...multipleOfThrees,...multipleOfFive]

    // console.log("arrayOfThreeAndfive",arrayOfThreeAndfive)
    // return sumOfThrees + sumOfFive // ivadan value solutionilott pass cheyyum  pokum call akunna thayey ullath ath nammal oru variableleykk asign cheyth aa value edukkam

    // inghaney cheyyunnath mandatharam aan numbers 100 allath kodukkumbo error verunn
    // real answer thayey

//     let wholeThreesAndFives = [...multipleOfThrees,...multipleOfFive]
//     console.log(wholeThreesAndFives)

//     let filteredThreesAndFives = [...new Set(wholeThreesAndFives)] //[...new Set(wholeThreesAndFives)] ith repeated aayi verunna valuesney oyivakum (wholeThreesAndFives) ith eath arrayil ullath aano athintey nane // nammalk 2 array undayirunnu ath join cheythappo repeated values undayirunnu ath oyivakkan ...new Set use aakuka
//     console.log(filteredThreesAndFives )

//     let sumOfThreesAndFives = filteredThreesAndFives.reduce((num,acc) => num + acc)
//     console.log(sumOfThreesAndFives)

//     return sumOfThreesAndFives;



// }

// // solution(10) // ithilott value varunnund so namuk ith variable lott kodi aakam
// let result = solution(10)

// console.log("The final result is:",result)

// ini ith ellam orotta array aaki eyuthi nokkam







// function solution(number){
//     let multipleOfThreesAndFives = []

//     for (let i=1; i<number; i++) {
//         if(i%3 == 0 ){
//             multipleOfThreesAndFives.push(i)
//         }
//         if(i%5 == 0){
//             multipleOfThreesAndFives.push(i)
//         }
//     }

//     console.log(multipleOfThreesAndFives)

//     let filteredThreesAndFives = [...new Set(multipleOfThreesAndFives)] 
//     console.log(filteredThreesAndFives)

//     let sumOfThreesAndFives = filteredThreesAndFives.reduce((num,acc) => num + acc)
//     console.log(sumOfThreesAndFives)

//     return sumOfThreesAndFives

// }

// // solution(10) // ithilott value varunnund so namuk ith variable lott kodi aakam
// let result = solution(1000)

// console.log("The final result is:",result)

// iniyum cheruthakkam






// function solution(number){
//     let multipleOfThreesAndFives = []

//     for (let i=1; i<number; i++) {
//         if(i%3 == 0 || i%5 == 0){
//             multipleOfThreesAndFives.push(i)
//         }
//     }

//     console.log(multipleOfThreesAndFives)

//     let filteredThreesAndFives = [...new Set(multipleOfThreesAndFives)] 
//     console.log(filteredThreesAndFives)

//     let sumOfThreesAndFives = filteredThreesAndFives.reduce((num,acc) => num + acc)
//     console.log(sumOfThreesAndFives)

//     return sumOfThreesAndFives

// }

// // solution(10) // ithilott value varunnund so namuk ith variable lott kodi aakam
// let result = solution(1000)

// console.log("The final result is:",result)

// iniyum short aakam









function solution(number){
    let sum = 0

    for (let i=1; i<number; i++) {
        if(i%3 == 0 || i%5 == 0){
            sum += i
        }
    }
    return sum

}

let result = solution(1000)
console.log("The final result is:",result)

