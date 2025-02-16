// //Objects

// // objects can store multilple values onnilathikam valuesney store cheyan use cheyyunath aan key value pair ithil key eppoyum string aayirikum value onnilathikam data type aayirikum eath data typum aavammay be string null undefined anything
// // const channelDeatils = {
// //     channelName : "CodeWithAdhi",
// //     channelAge : "20",
// //     
// //}

// //console.log(channelDeatils.channelAge)

// // Dta types :8 
// //------------------------------
// // primitive data types : 7
// // 1. String
// // 2. Number
// // 3. Boolean
// // 5. Null (special data type)
// // 4. Undefined (special data type)
// // 6. Symbol
// // 7. BigInt

// // Composite data types
// //------------------------------
// // 8. Object - A complex data type that allows us to store collections of data
// // --> Object 
// // --> Arrays
// // --> Functions



// //------------------------------
// // --> Dates
// // --> Regular Expressions
// // --> Error Objects
// // --> Math Object
// // --> JSON
// // --> Map
// // --> Set
// // --> WeakMap
// // --> WeakSet
// // --> ArrayBuffer
// // --> SharedArrayBuffer
// // --> DataView
// // --> Typed Arrays
// // --> Atomics
// // --> Promise
// // --> Generator
// // --> GeneratorFunction
// // --> AsyncFunction
// // --> Reflect
// // --> Proxy
// // --> Intl
// // --> WebAssembly
// // --> arguments
// // --> Module Namespace Objects
// // --> Immutable.js
// // --> Moment.js
// // --> Lodash
// // --> Ramda
// // --> Axios
// // --> jQuery
// // --> React
// // --> Angular
// // --> Vue

// //------------------------------
// // Non-primitive data types : 1
// //------------------------------
// //
// // let person = {
// //     name : "John",
// //     age : 30,
// //     isMarried : false,
// //     hobbies : ["reading","coding","playing"],
// //     address : {
// //         street : "50 main street",
// //         city : "Boston",
// //         state : "MA"
// //     }
// // }

// //







// const channelDeatils = {
//     channelName : "CodeWithAdhi",
//     channelAge : 20,
//     // ithil ethra veamankilum add aakam
// }
// // add key value pair to an object purath ninn enghane objectileykk value add akam
// //Dot natation enn aan parayuka
// channelDeatils.topics = "HTML"
// channelDeatils.topics = ["html","css","js"] // topics aan key


// console.log(channelDeatils.channelAge)
// console.log(channelDeatils.topics[0])


// //Bracket notation
// channelDeatils["newSeriesName"]= "js before react"

// console.log(channelDeatils["channelName"])

// //modify object properties 
// channelDeatils.channelAge = 21

// // Delete Object proprties

// delete channelDeatils.newSeriesName     // ithil delete default keyword an
// //or
// delete channelDeatils["newSeriesName"]

// const isAnyAwards = "No awards recieved" // ith key aan
// channelDeatils[isAnyAwards] = "no" // ith oru variable aayond arrak ullil double quotes venda // ith  value right side ullath



// const channelDeatils = {
//     channelName : "CodeWithAdhi",
//     channelAge : 20,
//     displayChannelName : function() {
//         console.log(this.channelName)
//         // ee function akath multiple methods use aakam
//     }
// }



// function makeChannelInfoObj (channelName, channelAge,isAnyAwardsRecd) {
//     return{
//         channelName:channelName, // or name:channelName, ennnum aakam enthum kodukam key aayitt
//         channelAge: channelAge,
//         isAnyAwardsRecd:isAnyAwardsRecd
//     }
// }

// // makeChannelInfoObj("Adhi diary",3,false) // ithil function return cheytha value undakum so nammal ith oru varriablileykk vekanam

// let resultObj = makeChannelInfoObj("Adhi diary",3,false) 

// console.log(resultObj)// ithil return objects aan ullath









//day 2



// const channelData = {
//     channelName : "CodeWithAdhi",
//     channelAge : 20,
//     channelTopics: ["HTML","CSS","JS"],
//     channelMessage : function() {
//         console.log("Lets share our knowledge...")
//     }
// }

// console.log(channelData)

// 1. Iteration 

// console.log("channelName" in channelData) //in enn keyword vech namuk key undo illey enn nokkan pattum

// for (let key in channelData) {
//      console.log(key)
//      console.log(channelData[key])
// } // inghaney for in vech ella values edukkan pattum


//2. Get only keys
// console.log(Object.keys(channelData)) //Object oru keyword aan ith namuk array formatil aan key kittuka

//3. Get only values
// console.log(Object.values(channelData)) // ithum array foramtil aan tharuka

//4. Get only keys & values
// console.log(Object.entries(channelData)) // entries ennath method aan ithum array formatil aan tharuka oru arakk akath kurey array aayi tharum

//5. object referencing
// nammal object same cpy verey onnileyk copy cheythal coppiyil mattam veruthiyal originalilum maarum // variableney poley seperate memmory storage alla 


//6. Copy object

// let channelDataCopy = Object.assign(channelData)
// console.log ("channelData",channelData)
// console.log("channelDataCopy",channelDataCopy)
// task is ithintey copyil change veruthiyal orgial marumo nokanam

//7. Object freeze 
// let chanelLogins = {
//     userName : "jsDiary",
//     password : "jsDiary123"
// }
// Object.freeze(chnnelLogins) // ith use aakunnath kod copiyilum orginalilum values change aakan pattilla copyeye polum mattan pattilla

// let channelLoginsHacked = Object.assign(chanelLogins)

// channelLoginsHacked.password = "********"

// console.log("chanelLogins",chanelLogins)
// console.log("channelLoginsHacked",channelLoginsHacked)



//8. Object with const

// const channelName = "Js diary"
// channelName = "Js diary"


// const channelBasicInfo = {
//     channelName :"js diary",
//     age : 3
// }
// const koduthond variable change aavilla but const koduth object declare cheythal athil ulla value namuk const aayalum change aakan pattum but mothathil mattan pattilla athil ulla values ney mathram change aakan pattum


//9.spread operatorn = merge objects
// const channelBasicInfo = {
//     channelName :"js diary",
//     age : 3
// }

// const channelAdvancedInfo = {
//     isMonotised:true,
//     twoFactorAuth : true
// }


// const aboutChannel = {...channelBasicInfo,...channelAdvancedInfo}

// console.log(aboutChannel)

// ee spread operation 3 placil use aakam 1- objectil 2-function akath arguments recive cheyyumbam spread cheyth edukkan patum 3- arrayil


//10. Nested Objects - oru objectintey ullil verey oru object nesting

// const channelData1 = {
//     channelName : "CodeWithAdhi",
//     channelAge : 20,
//     channelTopics: ["HTML","CSS","JS"],
//     channelMessage : function() {
//         console.log("Lets share our knowledge...")
//     },
//     channelAdvancedInfo :
// }

// nested nammdey task aan today task