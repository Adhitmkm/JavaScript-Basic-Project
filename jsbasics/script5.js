//Araay in javascript

//orrey catogories ulla values aanankil namukk array edukkam allankil object edukkam
// eg fruits array athil full fruits aan undavuka


// create an array
const channelTopics = ["html","css","js"]
// console.log(channelTopics.length)

// Get value from array
// console.log(channelTopics[1])

//Edit items
channelTopics[0] = "HTML"
console.log(channelTopics)

//Delete item
delete channelTopics[0]
console.log(channelTopics) // inghaney dlt aakiyal aa spacil empty enna keyword undakum


//Push & unshift
channelTopics.push("react js")//push kodukkumbol arayil last aan value add avuka
channelTopics.unshift("base")// unshift kodukkumbol arayil first aan value add avuka 

console.log(channelTopics)

//pop & shift
channelTopics.pop()//arayley avasanathey value kalayum
channelTopics.shift() // arayiley athyathey value kalayum

//splice & slice
const channelTopics = ["html","css","js","react js","next js"]

channelTopics.splice(2,1) //(eathpositional ninn thudangham , ethranam delete aakanam) eg(0,2) ithil 0 muthal thudanghi 0 1 ee 2 ennnam delete aakum
//ee slice operation oru valueney thirich tharum 
// inghaney slice cheythathiney store cheyyam venamankil
//splice original array change aavum
``
const spliceArray = channelTopics.splice(2,1)
console.log("spliceArray",spliceArray)

channelTopics.slice(0,1)//(0,2) ith 2 athava last one exclusive an conider chyilla
// ithil original array change aavilla // ithum namuk oru array thirich tharum 
const sliceArray = channelTopics.slice(2,1)
console.log("sliceArray",sliceArray)


//Array Iteration - in,of,for,forEach

// for (let topic in channelTopics) {
//     console.log(topic)
// }
// in aan kodukkunnath enkil index numbers kittum

for (let topic of channelTopics) {
    console.log(topic)
}
// of aan kodukkunnath enkil arrayiley values display cheyyum

for (let i=0; i<channelTopics.length; i++) {
    console.log(channelTopics[i])
}
// ith nammal normaly use aakunna for loop aaan

channelTopics.forEach(function(topic) {
    console.log(topic)
})
// foreach methodil oru callback function und 

channelTopics.map((topic)=>{
    console.log(topic)
})


//9 join, indexOf, includes, filter, reduce, sort, etc  // ith importenet self leaen for reserch //task


//10 Destructure operation
const channelData = ["Js Diary", 3,2025] // namuk eppoyum ithin values venam nammal vilikar channelData[1] thin pakaram destructure aaki vilikuka eg console.log(channelData[1])
const [name,age,year] = channelData
console.log(name)
console.log(age) // inghaney eppol venemenkilum vilikam

// 11 spread operation
const firstArr = [1,2,3]
const secondArr = [4,5,6]
// namuk ee 2 array koodey 1 aakanamenkil spread cheyyam
const fullArr = [...firstArr,...secondArr]

// 12 Array with const  // today task arrayidey casil const enghaney aan behave ceyyunnath
// 13 Array of object