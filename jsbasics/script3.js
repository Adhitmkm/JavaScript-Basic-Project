
// Arrow Function

let a = 10 // ith globaln akath alla kituka scripton akath aan
var b = 20 // ith globaln akath kitum
function getThirdUmairDec1 () {
    // console.log("ThirdUmairDec1")
    console.log(this) // this global aayit aan represent cheyyunath athil builtin functions undavum
}

const getThirdUmairDec2 = function() {
    // console.log("ThirdUmairDec2")
    console.log(this)
}

const getThirdUmairDec3 = () => {
    // console.log("ThirdUmairDec3")
    console.log(this)
}

// getThirdUmairDec1()
// getThirdUmairDec2()
// getThirdUmairDec3()


const screenEl = document.getElementById("displayScreen")

const showMessage = function(element) {
    console.log(this)
}

// const showMessage = (element) = {
//     console.log(this)
// }


screenEl.addEventListener("click", showMessage) // this enna keyword oru eventlistner oru inbuit eventlistner ntey call back functionil represent cheyyunnath aa click cheyyunna elemetney thanney aan

// buth ith arrow functionil aan this verunath enkil window aaan kittuka arrow functio  this ney point cheyyunnath win


const sampleObj = {
    tittle : "Hello World",
    age : 20,
    showMessage : function() {
        console.log(this)
    }
}

// sampleObj.showMessage()  // this enna keyword object aayi kittum object muyuvanayi represent cheyyum

// Eathokkey situationil arrow function oyivakandath 
// mainly dom operation chyunna timil this use cheyyunnundakil arrow function use cheyyathey irikuka 
// object casil namuk this vech property aceess cheyyanam enkil nammal arrow function oyivakuka

var beBoldTitle = "WEB DEVELOPMENT"

const sampleObj1 = {
    tittle : "Hello World",
    age : 20,
    showMessage : () => {
        console.log(this)
        console.log(this.tittle) // this enna keyword window aayi kittum windowil tittle property kium so web development aan kittum let aanankil undefined aan kittuka
    }
}

// sampleObj1.showMessage()
