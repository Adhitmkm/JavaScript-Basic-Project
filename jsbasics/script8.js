//Async Await



console.log("1. Third umpire  review  requested.")
let screenEl = document.getElementById("screen")
let umbireDecision;
const TIMEOUT = 5000

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
    },3000) 
}

function passInfoGroundUmbire(){
    console.log("6. Hey ground embire, please revert your decision!")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sucess")
        },4000)
    })
}

function letsRestartTheMatchNow(){
    console.log("7. Match restarted after review!")
    return new Promise((resolve,reject)=>{
        resolve("sucess")
    },5000)
}

function showTheError(err){
    // console.log("Sorry there is some error found") manually venda
    console.log(errf)
}


// getThirdUmbireResult()
// .then(displayThirdUmbireResults)
// .then(passInfoGroundUmbire)
// .then(letsRestartTheMatchNow)

// ini namuk ith venda async await vech cheyyam

// function initThirdUmbaireReview(){
//     getThirdUmbireResult()
//     displayThirdUmbireResults()
//     passInfoGroundUmbire()
//     letsRestartTheMatchNow()
//     showTheError()
// } //eee oru functioney aan asynchronous aakandath

// async function initThirdUmbaireReview(){
//     await getThirdUmbireResult()
//     await displayThirdUmbireResults()
//     await passInfoGroundUmbire()
//     await letsRestartTheMatchNow()
//     showTheError()
// }
// show error rn aavunnu so ith nammal try catch ntey ullil aan eyuthuka

async function initThirdUmbaireReview(){
    try{
        await getThirdUmbireResult()
    await displayThirdUmbireResults()
    await passInfoGroundUmbire()
    await letsRestartTheMatchNow()
    }catch {
        showTheError(err) // err pass cheythal avadathey error kittum enthanann so mannuly sett aakunnathin pakaram console.log(err)print aavum error
    }
    
}

initThirdUmbaireReview()


console.log("5. Third umpire  review process finished.")
console.log("-------------------------------------------")
console.log("other codes are executing")
console.log("other codes are executing")
console.log("-------------------------------------------")


