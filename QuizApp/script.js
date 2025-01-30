// let name = ["10","11","12"]
// console.log(name[0]) working manasilakan // thayey ulla oro objectum oro index aan

let quizData = [
    {
        question : "Most popular programing language 1?",
        a:"c++",
        b:"pythonaa",
        c:"javascript",
        answer:"c"
    },{
        question : "Most popular programing language 2?",
        a:"c++",
        b:"pythonqq",
        c:"javascript",
        answer:"c"
    },{
        question : "Most popular programing language 3?",
        a:"c++",
        b:"python",
        c:"javascript",
        answer:"c"                                                                                                                                                                                                                                                                                                                                                                      
    }
]

//ading values in dom
//stepl 1 // get element from dom

let title = document.querySelector(".title")

let aLabel = document.querySelector(".aLabel")
let bLabel = document.querySelector(".bLabel")
let cLabel = document.querySelector(".cLabel")
let submitBtn = document.getElementById("submit")
let answers = document.querySelectorAll(".answer")  // html answer class ella class kittan querySelectorAll ith oru array aayittan kittuka enn vecha ella class
let quizContainer = document.querySelector(".quiz-container");
let quizNumber = 0; // inghaney kodutha araay [0]ithinpakaram [quizNumber] inghaney koduthal mathi
let mark = 0; // mark koodanam alertn pakaram mark kooduka 
let totalquestions = quizData.length;

// ini nammal arra of quizdatakk akath ulla question edukanam
//task 1 
// display ui

function displayQuestionAnswer () {
    
    if(totalquestions > quizNumber ) {
        title.innerHTML = quizData[quizNumber]?.question;
        aLabel.innerHTML = quizData[quizNumber]?.a;
        bLabel.innerHTML = quizData[quizNumber]?.b;
        cLabel.innerHTML = quizData[quizNumber]?.c;

        // Reset radio buttons
        answers.forEach(answer => answer.checked = false);


            
    }else {



        quizContainer.innerHTML = `
        <h2>Quiz Over! Your Score: ${mark}/${totalquestions}</h2>
        <h3>Correct Answers:</h3>
        <ul>
            ${quizData.map((q, index) => `<li>Q${index + 1}: ${q.question} Answer: ${q.answer.toUpperCase()}</li>`).join('')}
        </ul>
    `;

    submitBtn.style.display = "none"; // Hide submit button








        // // alert("question end")

        //  // Quiz End - Display score and correct answers
        //  title.innerHTML = `Quiz Over! Your Score: ${mark}/${totalquestions}`;

        // let correctAnswersList = `<h3>Correct Answers:</h3><ul>`;
        // quizData.forEach((q, index) => {
        //     console.log(q.question)
        //     correctAnswersList += `<li>Q${index + 1}:${q.question} answer:  ${q.answer}</li>`;
        // });
        // // console.log(quizData[0].question)
        // correctAnswersList += "</ul>";

        // // Display correct answers after quiz ends
        // quizContainer.innerHTML = correctAnswersList;
        // submitBtn.style.display = "none"; // Hide submit button
    }
        
}


//Task 2 
//Check submitted answer
function submitAnswer() {

    submitBtn.addEventListener("click", function(event){
        event.preventDefault();
        //Task 3
        //Get user answer here

        // getUserAnswer()  // inghaney pora ith thayey ithileyk value return cheyyunath kond variable aakanam
        let userAnswer = getUserAnswer()
        // console.log("user selected this answer",userAnswer)
        if(userAnswer === quizData[0].answer) {
            mark = mark + 1;
            alert("You are correct" ,mark)
        }else {
            alert("you are wrong")
        }
        quizNumber = quizNumber + 1 ;
        console.log(mark)

        displayQuestionAnswer();
    })
}

//Get the user answer
function getUserAnswer() {
    let userAnswer;
    answers.forEach( function(answer) {
        if(answer.checked === true)
            userAnswer = answer.id
    })
    return userAnswer; // eppo namal getUserAnswer ee value pass cheyyum ee value avadey store cheyyana so ath variablelil store cheyyanam
    // console.log(userAnswer)
}





//Function Invoke // athaav displayQuestionAnswer eefunction ini vilikananam  vilichillankil ullil ullath work aavilla
displayQuestionAnswer();
submitAnswer();







// task
// let quizNumber = 0; // inghaney kodutha araay [0]ithinpakaram [quizNumber] inghaney koduthal mathi
// let mark = 0 // mark koodanam alertn pakaram mark kooduka pinney quez number kootuka appo 2 mathey quiz question  veranam
// anghaney mark koodunnu question maarunnu loop poley aavanam 

// quez itemlengh vech aan checkm cheyyunath next qestion lengh enna property



