let cameraAngleDecision = [];

function processThirdUmbireReview(grondUmbireReqRecd, callbackFn) {
    if (!grondUmbireReqRecd) return;

    // Call the callback function to get the decision
    callbackFn();

    console.log("cameraAngleDecision", cameraAngleDecision);

    // Destructure the first element from the array
    const [checkCameraAngle1Result] = cameraAngleDecision;

    // Use the result to display the message
    checkCameraAngle1Result ? displayMessageInScreen("OUT") : displayMessageInScreen("NOT OUT");
}

function displayMessageInScreen(finalScreenDecision) {
    console.log("finalDecision", finalScreenDecision);
    // ScreenEl.innerText = finalScreenDecision;
    return true;
}

function checkCameraAngle1() {
    let decision = prompt("What's your decision? (OUT/NOT OUT)");
    console.log("decision", decision);

    // Convert the decision to a boolean
    decision = decision.toLowerCase() === "out";

    // Push the decision into the array
    cameraAngleDecision.push(decision);
    return decision;
}

// Call the main function
processThirdUmbireReview(true, checkCameraAngle1);