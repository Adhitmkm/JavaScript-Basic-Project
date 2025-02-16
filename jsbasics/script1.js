// js variables
// conditions
// logical operators


console.clear( )

//var global scope aan
var a =10

//let local scope aan
let b = 20

// variable can accept diffrent types of value
console.log(a)
console.log(b)

//cont ennal constant aayitulla values eg pi value ee PI eyunnath capitalil aayirikkum nalla practice aanu

const PI = 3.14

// var ennath 
// var is block scoped and can be redeclared and updated 
var a = 10

// ith oru block ann 
if(true){
    var d = 20
    console.log(d)
}
console.log(d)

for(var i = 0; i<5; i++){
    var c = 30
}
console.log(c)
console.log(i)
// output kitum karanam var global scope aanu

// nammal programing levelelil think cheyyumbo nammal oru blockintey ullil eyuthiyath purathulla aalk kitunnunnu ennanth danger aanu same namil veendundum declarecheyuunu verey filesil kittunnu ith ellam danger aan 
// so ith kond let use cheyyunnu 


// let ennath
if(true){
    let e = 20
    console.log(e)
}
console.log(e)


for(let i = 0; i<5; i++){
    let c = 30
}
console.log(c)
// ippo erro kittum reference error kittum karanam let block scope aanu
console.log(i)
// output kittathilla karanam let ennath level block scope aanu




// ini function casil use cheyyunna var and let difference aanu

function matches() {
    var numberOfMatches = 10
}
matches()
console.log(numberOfMatches)
// error is Uncaught ReferenceError: numberOfMatches is not defined
// output kittathilla karanam block scope and funtion scope difrence aanu ith function scope aanu so aa function purath let aayalum var aayalum kittathilla block level aanaankil akathum purathum but function aayond aa function ullil mathram kittathullu 
// let aayalum var aayalum function ullil eyuthi function purath call aakiyal kittathilla 


// let numberOfMatches1 = 10
// let numberOfMatches1 = 20

// console.log(numberOfMatches)

// error aaanu Uncaught SyntaxError: Identifier 'numberOfMatches' has already been declared

// but var use cheyyunna karanam ith error varilla karanam var nammal 2 math asign cheyth value aan show cheyyuka first valueney over ride cheyyum 

// nammal let aan mostly use cheyyar











//<<<<<-----------------Conditions----------------->>>>>>

let isRainingToday = true
let isMatchToday;

if(isRainingToday){
    isMatchToday = "No, there is no match today"
}else{
    isMatchToday = "Yes, there is a match today"
}
// ee condition reactintey casil verumbo 

isMatchToday = isRainingToday ? "No, there is no match today" : "Yes, there is a match today"
// isMatchToday = isRainingToday ? "" : ""
// ith react casil use cheyyunna condition aanu 
// ismatchtoday  ? aanankil true aanu kittum allankil : ithil false aanu eyuthuka

console.log(isMatchToday)

isResultToday = team1Score > team2Score ? "Team 1 Won": "Team 2 Won"





//<<<<<-----------------Logical operators----------------->>>>>>

// || or operator ithil eathinkilum onn sheri aaya mathi 
// && and operator
// ! not operator
// Nullish coalescing operator (??)

// || or operator = eatatuvum athyathey true valueney return cheyyum athava thrichu tharum first true aayitullathiney kanikku piney trueulathileykk onnum pokilla

false || true || false || true

// ithiley true first aayitulla value kittum

let firstPlayer = "",
    palyerMidName = "",
    playerLastName = "Dhoni"

let tShirtDisplayName = firstPlayer || palyerMidName || playerLastName
// tShirtDisplayName = false || false || true 3 mathathath aan true so op dhoni enn verum matullaty ellam null aan
console.log(tShirtDisplayName)


let advertisers = false;
let audience = false;

let finalDecision = advertisers || audience;
// finalDecision = false || false = false

console.log(finalDecision ? "Yes, Match on" : "No, Match off")




// && and operator ithil ella conditionsum onn aavanam
// && and operator = ithil kittum true aanenkil true aanu kittum false aanenkil false aanu kittum
// onnilathikam statements OR n akathoodey kadathi vidam eppoyano true aayitulla value kittunnath a timil execution nirthukayum value thirich tharukayum cheyyum pinney anghot execute cheyyathilla

 let advertisers = true,
    investors = true,
    audience = true;

    let finalDecision;
    finalDecision = advertisers && investors && audience;
    // finalDecision = true && true && true = true
    //ithi first value true vennaley exit cheyyathullu

    console.log(finalDecision)
    console.log(finalDecision ? "Yes, Match on" : "No, Match today")

    let advertisers = true,
    investors = true,
    audience = false;

    let finalDecision;
    finalDecision = advertisers && investors && audience;
    // finalDecision = true && true && false = false
    //ithi first value true 2 value true 3 value false so false aanu

    console.log(finalDecision)
    console.log(finalDecision ? "Yes, Match on" : "No, Match today")

    et advertisers = false,
    investors = true,
    audience = true;

    let finalDecision;
    finalDecision = advertisers && investors && audience;
    // finalDecision = false && true && true = false
    //ithi first value false kitty bakki ulla values edukkathilla

    console.log(finalDecision)
    console.log(finalDecision ? "Yes, Match on" : "No, Match today")











// ! not operator
// ! not operator = ithil true aanenkil false aanu kittum false aanenkil true aanu kittum atahava trueney false aakum false ney true aakum
// true aayathiney alse aakanum false aayathiney true aakanum aan use cheyyunnath

let thisIsATrueValue = true;

console.log(!thisIsATrueValue)
//op false first true aayirunu ! use cheyyth false aaki

let openingBatsMan1 = "",//false value null aanakil js false aayittan consider cheyyuka
    openingBatsMan2 = ""

    if(!openingBatsMan1) {
        console.log("Please provde batsman 1 name!")
    }

    // ee condition work aavilla karaanam openingBatsMan1 null aanakil false aayittan consider cheyyuka namuk true aanakil mathram aaney condition work aaavu so ! startingil itt kodukkkuka

{/* <h1 id= "page-title"></h1> ith htmlileyuthuka */}

const pageTitle = document.getElementById("page-title")
let pageTitleContent  = ""

if(pageTitle){
    if(!pageTitleContent) {
        pageTitleContent = "Welcome to the match"
        pageTitle.innerHTML = pageTitleContent

    }
}

// ith inghnaneyum eyutham
if(pageTitle && !pageTitleContent) {
        pageTitleContent = "Welcome to the match"
        pageTitle.innerHTML = pageTitleContent
}






// Nullish coalescing operator (??)
// Nullish coalescing operator (??) = ithil null aanenkil mathram kittum athava undefined aanenkil mathram kittum athava null aanenkil kittum
// || or operatoril null aanenkil kittum false aanenkil kittum athava undefined aanenkil kittum athava null aanenkil kittum athava empty string aanenkil kittum athava 0 aanenkil kittum athava false aanenkil kittum athava kittum
// Nullish coalescing operator (??) = ithil null aanenkil mathram kittum athava undefined aanenkil mathram kittum athava null aanenkil kittum athava empty string aanenkil kittum athava 0 aanenkil kittum athava false aanenkil kittum athava kittum

let playerFirstName = null,
    playerMidName = null,
    playerLastName = null;

    let tShirtDisplayName = playerFirstName ?? playerMidName ?? playerLastName ?? "Please provide a player name"

    console.log(tShirtDisplayName)

    // null undefined difrence null nammal kodukkunath aan undefined js kodukkunnath aan
    // null aanenkil nammal kodukkunath empty aayitullath aan undefined aanenkil nammal kodukkunath empty allaath empty aayitullath aan null aan 

    // 0 = false    1  = true inganey js ithney kanakakunnath

    if(0) {
        console.log("please exicute me")
    }
    // ith exicute cheyyilla karanam 0 false aan athil 1 aanenkil true aan so exicute cheyyum