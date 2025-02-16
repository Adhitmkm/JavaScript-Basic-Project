// axios main usage namuk error handling




const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?";


//Dom elemets 
const dishTitleEl = document.getElementById("dish-title");
const dishMediaEl = document.getElementById("dish-media");
const dishList = document.getElementById("dish-list");
const dishListItem = document.getElementById("dish-list-item");
const dishListEl = document.getElementById("dish-list")


//Get Data   //athyam axios file add akanam html pagil
// console.log(axios.get(API_URL)) // promise kittunnundo nokuka kittuvaneyl then vech handle cheyyam
// axios.get(API_URL) 
// .then(({data})=>{ // kittiya datayiley data mathram mathi so athiney destructure cheyyam (data) ithiney ullil brace iduka ({data}) meley line aan ith ippo namuk datayey mathram kitty
// // console.log(data)
// updateDom(data)
// })
// .catch((error)=>{
//     console.log("error is",error)
// })

// ith verey reethiyil cheyyam custom aayit axios cheyyam

axios({
    method : "get",
    url : API_URL ,
    params : {
        api_key :'',
        f : 'a'  // read documentation study learn more
    }
})// ithil nammal axios ney invoke cheyth oru objectney pass cheythu ithil namuk method paranj kodukkan patum piney params sett cheyyan pattum params oru object aan
.then(({data})=>{ 
    console.log(data)
    updateDom(data)
})
.catch((error)=>{
    console.log("error is",error)
})




function updateDom(data) {
    data.meals.forEach((dish)=>{
        const li = document.createElement("li")
        li.innerHTML = `
        <img src='${dish.strMealThumb}'/>
        <h3>${dish.strMeal}<h3/>
        `
        dishListEl.appendChild(li)
    })
}

