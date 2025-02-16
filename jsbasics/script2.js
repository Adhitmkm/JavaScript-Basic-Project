// JS FUNCTIONS

//js function just like a value but speacial type value

// function myFunction() {
//     console.log("Hello World!");
// }

// myFunction();


// function umbairDecision(decision) {
//     // Parameters
//     let isdecision = decision
//     console.log("Umbair Decision is " + isdecision);
// }


// umbairDecision("OUT") 
// // Argument// ivadey nammal function call cheyyunna timil thanney oru value function blockleykk ayakkan pattum athan arguments
// argument aayitt onnilathikam datas pass cheyyam recive cheyyam 


// const displayScreenEl = document.getElementById("displayScreen")
// function displayUmbairDecision(finaldecision) {
//     displayScreenEl.innerText = finaldecision;
//     return true;
//     // oru function namut oru value return cheyyunndankil ath seekarikan verey oru varriable venam
// }


// function getThirdUmairDecision(decision) {
//     let isdecision = decision
//     // isdecision && displayUmbairDecision(isdecision) // Argument
//     let displayUmbairDecisionResult = isdecision && displayUmbairDecision(isdecision) // Argument
//     // let displayUmbairDecisionResult = displayUmbairDecision(isdecision) // inghaney aan sherikum verandath meley condition ullath kond aanu
//     // so namuk ith oru variable aakanam karanam meley ulla function namuk return value tharyunund so ith oru variableykk vekkam
//     console.log(displayUmbairDecisionResult)
//     if(displayUmbairDecisionResult){
//         setTimeout(() => {
//             displayScreenEl.innerText = ""
//         },4000)
//     }
// }

// getThirdUmairDecision("OUT") // Argument

// // oru function namut oru value return cheyyunndankil ath seekarikan verey oru varriable venam


// //Function Declaration
// let gameNameIs = "Cricket" 

// function dispalyMessage() {
//     console.log("Hello World!");
// }

// dispalyMessage();
// // ith declaration timil js n manasilavum ith function anann globally function aayi kanikum degeug timeil kanam

// //Function Expression
// let displayMessage = function() {
//     console.log("Hello World!");
// }

// displayMessage();
// //ith declaration timil js n manasilavilla ith function anann globally undefined aayi kanikum



//Callback Function // call back functin ennal oru functiontey aargument aayitt matoru function paranj vidukayanankil athiney aan call back

let cameraAngleDecisions = []

processThirdUmbireReview(grondUmbireReqRecd,callbackFn){
 if(!grondUmbireReqRecd) return

grondUmbireReqRecd && callbackFn()

    // const [cameraAngle1Result] = cameraAngleDecisions // array destructuring //meley arrayin values namuk kittum edukka aa destructructrue method use cheyyunnnath allankil cameraAngleDecision[0] aanu vilikar
    const [cameraAngle1Result1 , cameraAngle2Result] = cameraAngleDecisions

    // cameraAngle1Result ? dispalyMessageInScreen("OUT") : dispalyMessageInScreen("NOT OUT")

    if(cameraAngleDecisions.length > 1 ){
        cameraAngle1Result1 && cameraAngle2Result ? dispalyMessageInScreen("OUT") : dispalyMessageInScreen("NOT OUT")
   
    }
}

function dispalyMessageInScreen(finalScreenDecision) {
    const ScreenEl = document.getElementById("displayScreen")
    ScreenEl.innerText = finalScreenDecision    
}

function getThirdUmairResponse() {
    let decision  = prompt("whats your decision")
    decision = decision.toLowerCase() === "out" ? true : false
    cameraAngleDecisions.push(decision)
    return decision
}

function checkCameraAngle1() {
    // umbaire is checking some visuals
    //umbare has final decision now
   getThirdUmairResponse()
}
function checkCameraAngle1() {
    // umbaire is checking some visuals
    //umbare has final decision now
    getThirdUmairResponse()
}
// function checkCameraAngle1() {
//     // umbaire is checking some visuals
//     //umbare has final decision now
//     let decision  = prompt("whats your decision")
//     decision = decision.toLowerCase() === "out" ? true : false
//     cameraAngleDecisions.push(decision)
//     return decision
// }

processThirdUmbireReview(true,checkCameraAngle1)//nammal ee function call akmbo thanney verey oru callback function pass aakunnund // ithintey akath ullath oru function aayi kanikum checkCameraAngle1() inghaney aann call cheyyar but call back inghaney aan vilikar
//ivade oru functioney argument aayit aan pass chyunnath athiney aan callback functon anannu vilikar
processThirdUmbireReview(true,checkCameraAngle2)
