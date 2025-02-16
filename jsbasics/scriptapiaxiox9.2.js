// axios main usage namuk error handling




const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";


//Dom elemets 
const dishListEl = document.getElementById("dish-list")


// axios({
//     method : "get",
//     url : API_URL ,
//     params : {
//         api_key :'',
//         f : 'a'  // read documentation study learn more
//     }
// })// ithil nammal axios ney invoke cheyth oru objectney pass cheythu ithil namuk method paranj kodukkan patum piney params sett cheyyan pattum params oru object aan
// .then(({data})=>{ 
//     console.log(data)
//     updateDom(data)
// })
// .catch((error)=>{
//     console.log("error is",error)
// })

// async await vech axios ney vilikkan pattum

async function getData(){
    try{
        const {data} = await axios.get(API_URL) // {data} datayey destructure cheythu
        // console.log("data",data)
    updateDom(data)
    }catch(error){
        console.log(error.message);
        
    }
}// async awaitil error handle cheyyan try catch use aakiyal mathi


getData()

function updateDom(data) {
    data.categories.forEach((dish)=>{
        const li = document.createElement("li")
        li.innerHTML = `
        <img src='${dish.strCategoryThumb}'/>
        <h3>${dish.strCategory}<h3/>
        `
        dishListEl.appendChild(li)
    })
}

