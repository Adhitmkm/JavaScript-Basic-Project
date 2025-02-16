const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const dishListEl = document.getElementById("dish-list")


async function getData(){ // ith async function aan so async eyuthanam
    const response = await fetch(API_URL) //fetch aan namuk data eduth kond tharunnath so athin namuk await kodukkanam
    const responseData = await response.json() //ithum awaitil aan kodukeyndath
    // updateDom(responseData) // namuk ith response data undankil mathram updatedom vilichal mathi
    responseData && updateDom(responseData)
}




function updateDom(data) { // meley responseData aan pass cheyunath ath data enna peril aan anmmal ivadey edukkunnath enth perilum namuk recive cheyyam
    // console.log(data.categories) // catogories kitunnund ini namuk ee catoriesney oron aayi edukanam for each vech edukam
    data.categories.forEach((dish)=>{
        // console.log("DISH",dish) // oro oronn ayitulla values ith oru object aayi aan kitunnath
        const li = document.createElement("li")
        // console.log(li)
        li.innerHTML = `
        <img src='${dish.strCategoryThumb}'/>
        <h3>${dish.strCategory}<h3/>
        `
        dishListEl.appendChild(li)
    })
}







getData()  //async enna keyword eyuthan oru function venam ithintey bodey meley und 






// const promiseIs = fetch(API_URL) // ivadey fetch namuk oru promisney thannu // fetch built in method aan
// console.log(promiseIs)

// fetch(API_URL)
// .then(function(response){
//     return response.json()  //responsney json formatil aakanam
// })   //then akath oru callback function kidapund // fetch oru promise aan tharunnath enkil namuk then use aakam
// //ippo namuk response kitty
// .then(function(data){
//     console.log("data is",data)//ippo datas kitty 
//     updateDom(data) // kittiya data vech dom update cheyyan pokukayan

// })

//ini meley ullathiney short aakam

// fetch(API_URL)
//     .then((response)=>response.json())
//     .then((data)=>updateDom(data))

// ee reethiyum oyivakam meley eyuthunnund nokk meley async use aakiyitt