//javascript Promise - resolve reject
// nammal namudey friendnod paisa kadam choikuvan chlepo resolve allankil reject  resolve aanakil  .then vilikum
// promisil resolve reject undavum pinney  oru .then und
//resolve aanakil mathram next functionileyk pokullu
console.log("1. Third umpire  review  requested.")
let screenEl = document.getElementById("screen")
let umbireDecision;
const TIMEOUT = 1000

function getThirdUmbireResult() {
    console.log("2. Third umpire  review  started.")
    console.log("3. Third umpire  checking  camera.")

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(umbireDecision ="OUT")
            console.log(`4. Third umpire  result is ${umbireDecision}.`) 
        },TIMEOUT)
    })

}

function displayThirdUmbireResults(){
    console.log(`5. Redy to show result in ground screen: ${umbireDecision}`)
    return new Promise((resolve,reject)=>{
        resolve(screenEl.innerText = umbireDecision)
        // reject("404")

    }) 
}

function passInfoGroundUmbire(){
    console.log("6. Hey ground embire, please revert your decision!")
}

function letsRestartTheMatchNow(){
    console.log("7. Match restarted after review!")
}

function showTheError(){
    console.log("Sorry there is some error found")
}

//  getThirdUmbireResult(function() {
//     displayThirdUmbireResults(function(){
//         passInfoGroundUmbire( function() {
//             letsRestartTheMatchNow()
//         })
//     })
//  })  

// ini ith venda this is callback hell ini nammalk promise use cheyyam 

// let promise = getThirdUmbireResult()
// promise.then(displayThirdUmbireResults)

//or
getThirdUmbireResult()
.then(displayThirdUmbireResults)
.then(passInfoGroundUmbire)
.then(letsRestartTheMatchNow)
// .finally(letsRestartTheMatchNow)// ith main ayit use aakunnath ellam ok aan enkil last thath .then n pakaram .finally use aakam
// ini namuk reject aan kittiyath enkil catch kodukkan pattum\
.catch(showTheError)



console.log("5. Third umpire  review process finished.")
console.log("-------------------------------------------")
console.log("other codes are executing")
console.log("other codes are executing")
console.log("-------------------------------------------")

