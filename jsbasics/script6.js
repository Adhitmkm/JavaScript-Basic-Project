//CallBack hell
//imp js  oru sincronous language aan athayath js n oru samayath oru execution mathram cheyyan pattullu ath mattonninn vendi wait cheyyilla athayath 
// no1 kayinjittey nexx pokullu 

console.log("1. Third umpire  review  requested.")
let screenEl = document.getElementById("screen")
let umbireDecision;
const TIMEOUT = 1000

function getThirdUmbireResult(callback) {
    console.log("2. Third umpire  review  started.")
    console.log("3. Third umpire  checking  camera.")
    setTimeout(()=>{
        umbireDecision ="OUT"
        console.log(`4. Third umpire  result is ${umbireDecision}.`) 
        callback() // eppoyano decision kitunnath appo mathram ee callback functioney vilichal mathi 
    },TIMEOUT)// ith oruasynchronus aayitulla function aaan
}

function displayThirdUmbireResults(callback){
    console.log(`5. Redy to show result in ground screen: ${umbireDecision}`)
    screenEl.innerText = umbireDecision
    callback()
}

function passInfoGroundUmbire(callback){
    console.log("6. Hey ground embire, please revert your decision!")
    callback()
}

function letsRestartTheMatchNow(){
    console.log("7. Match restarted after review!")
}



// getThirdUmbireResult(displayThirdUmbireResults) //displayThirdUmbireResults() // inghaney vilichal namuk timeout kayinjitt ulla value venanam allankil undefined kanikum so ee functioney namuk callback ayi vidam

//or
 getThirdUmbireResult(function() {
    displayThirdUmbireResults(function(){
        passInfoGroundUmbire( function() {
            letsRestartTheMatchNow()
        })
    })
 }) 
 // ippo 7 console cheyunnilla why bcz function(){functinname()} functionntey ullil euthumbol()ith venam getThirdUmbireResult(displayThirdUmbireResults)ingnaey eyuthombo ( ith venda//reserch
//imp
 // this is calld call back hell onninn purakey oronn oronnayi callbacks kodukkunnu  // ithintey pariharam promise



console.log("5. Third umpire  review process finished.")
console.log("-------------------------------------------")
console.log("other codes are executing")
console.log("other codes are executing")
console.log("-------------------------------------------")

