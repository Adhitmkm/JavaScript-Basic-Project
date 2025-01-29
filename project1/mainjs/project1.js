// Kitchen project ------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

// let kitchenInput = document.getElementById("kitchen-input")
// let addBtn = document.getElementById("add-btn")
// let kitchenItemList = document.getElementById("kitchen-item-list")

// step2 
// Add kitchen items

// function addKitchenItemss() {

    // asign imput values in a variable
    // let kitcheninputData = kitchenInput.value;

    // create DOM elements now

    // let li = document.createElement("li");
    // li.innerText = kitcheninputData;

    // animation add cheyyam cssText ithil namuk orupad karinghal orumich kodukkam
    // li.style.cssText = "animation-name: slideIn;";

    // htmlil value kond varan append cheyyanam ul ntey ullil append cheyyam 
    // kitchenItemList.appendChild(li)

    // type cheyth kayinjal empty aavan box
    // kitchenInput.value = ''

    // box ley focus veran
//     kitchenInput.focus()

//     console.log(li)

    


// }

// step 1 
//Add an even lisner to the button 
// addBtn.addEventListener('click',addKitchenItemss)


// today task add all values in array store




// let kitchenInput = document.getElementById("kitchen-input")
// let addBtn = document.getElementById("add-btn")
// let kitchenItemList = document.getElementById("kitchen-item-list")
// let arrBtn = document.getElementById("arrbtn")
// let arrLi = document.getElementById("arrli")

// kitchenarray = []

// function addKitchenItems() {

//     kitcheninputData = kitchenInput.value

//     let li = document.createElement("li");
//     li.innerText = kitcheninputData

//     kitchenItemList.appendChild(li)

//     kitchenarray.push(kitcheninputData)

//     kitchenInput.value = ''
//     kitchenInput.focus()

//     console.log(kitchenarray)

// }

// function showArrList() {
//         kitchenarray.forEach(function(items,index){
//             let li1 = document.createElement("li")
//             li1.innerText = `${index +1}- ${items}`
//             arrLi.appendChild(li1)
//         })
    // console.log(kitchenarray)
// }


// addBtn.addEventListener('click',addKitchenItems)
// arrBtn.addEventListener('click',showArrList)
// addBtn.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         addKitchenItems()
//     }
//   });








// // Adding trash delete button i tag

// let kitchenInput = document.getElementById("kitchen-input")
// let addBtn = document.getElementById("add-btn")
// let kitchenItemList = document.getElementById("kitchen-item-list")

// // step2 
// // Add kitchen items

// function addKitchenItemss() {

//     // asign imput values in a variable
//     let kitcheninputData = kitchenInput.value;

//     // create DOM elements now

//     let li = document.createElement("li");
//     li.innerText = kitcheninputData;

//     // animation add cheyyam cssText ithil namuk orupad karinghal orumich kodukkam
//     li.style.cssText = "animation-name: slideIn;";

//     // htmlil value kond varan append cheyyanam ul ntey ullil append cheyyam 
//     kitchenItemList.appendChild(li)

//     // type cheyth kayinjal empty aavan box
//     kitchenInput.value = ''

//     // box ley focus veran
//     kitchenInput.focus()

//     console.log(li)


//     // create Trash Button    // inghney aan htmilileey oru karyathey kond verunnath append cheyth

//     let trashBtn = document.createElement("i")
//     trashBtn.classList.add("fa","fa-trash");
//     li.appendChild(trashBtn)
//     console.log(trashBtn)
// }

// function deleteKitchenItem(event) {
//     console.log(event.target.classList[1])

//     if(event.target.classList[1] === "fa-trash" ) {

//         // namuk dlete akendat parent elementney aan li athiney edukkan aan variablileykk asign cheythu 
//         // ithiley event.target i aan athintey patent li aan li yudey patent ul
//         let item = event.target.parentElement;
//         item.classList.add("slideOut");
//         item.addEventListener('transitionend',function(){
//             console.log("animation completed")
//             // ivadey aan ippo remove kodukkunney
//         // item.remove()
//         })
//         // animation kayinjitt remove aavan
//         // console.log(item)
//         item.remove()
//     }
// }





// // step 1   
// //Add an even lisner to the button 
// addBtn.addEventListener('click',addKitchenItemss)
// kitchenItemList.addEventListener("click",deleteKitchenItem)



// my way of deletetion 



// let kitchenInput = document.getElementById("kitchen-input")
// let addBtn = document.getElementById("add-btn")
// let kitchenItemList = document.getElementById("kitchen-item-list")


// // step2 
// // Add kitchen items

// function addKitchenItemss() {

//     // asign imput values in a variable
//     let kitcheninputData = kitchenInput.value;

//     // create DOM elements now

//     let li = document.createElement("li");
//     li.innerText = kitcheninputData;

//     // animation add cheyyam cssText ithil namuk orupad karinghal orumich kodukkam
//     li.style.cssText = "animation-name: slideIn;";

//     // htmlil value kond varan append cheyyanam ul ntey ullil append cheyyam 
//     kitchenItemList.appendChild(li)

//     // type cheyth kayinjal empty aavan box
//     kitchenInput.value = ''

//     // box ley focus veran
//     kitchenInput.focus()

//     console.log(li)


//     // create Trash Button

//     let trashBtn = document.createElement("i")
//     trashBtn.classList.add("fa-solid","fa-trash");
//     li.appendChild(trashBtn)
//     console.log(trashBtn)

//     function deleteKitchenItem() {
//         li.remove()
//     }

//     trashBtn.addEventListener("click",deleteKitchenItem)

    
// }



// // step 1 
// //Add an even lisner to the button 
// addBtn.addEventListener('click',addKitchenItemss)
// trashBtn.addEventListener("click",deleteKitchenItem)








































// edit tag add cheyyam 


// // Adding trash edit button i tag

// let kitchenInput = document.getElementById("kitchen-input")
// let addBtn = document.getElementById("add-btn")
// let kitchenItemList = document.getElementById("kitchen-item-list")

// // step2 
// // Add kitchen items

// function addKitchenItemss() {

//     // asign imput values in a variable
//     let kitcheninputData = kitchenInput.value;

//     // create DOM elements now

//     let li = document.createElement("li");
//     li.innerText = kitcheninputData;

//     // animation add cheyyam cssText ithil namuk orupad karinghal orumich kodukkam
//     li.style.cssText = "animation-name: slideIn;";

//     // htmlil value kond varan append cheyyanam ul ntey ullil append cheyyam 
//     kitchenItemList.appendChild(li)

//     // type cheyth kayinjal empty aavan box
//     kitchenInput.value = ''

//     // box ley focus veran
//     kitchenInput.focus()

//     console.log(li)


//     // create Trash Button    // inghney aan htmilileey oru karyathey kond verunnath append cheyth

//     let trashBtn = document.createElement("i")
//     trashBtn.classList.add("fa","fa-trash");
//     li.appendChild(trashBtn)
//     console.log(trashBtn)

//     // create Edit button  // inghney aan htmilileey oru karyathey kond verunnath append cheyth
//     let editBtn = document.createElement("i")
//     editBtn.classList.add("fa","fa-edit")
//     li.appendChild(editBtn)
// }

// function deleteKitchenItem(event) {
//     console.log(event.target.classList[1])

//     if(event.target.classList[1] === "fa-trash" ) {

//         // namuk dlete akendat parent elementney aan li athiney edukkan aan variablileykk asign cheythu 
//         // ithiley event.target i aan athintey patent li aan li yudey patent ul
//         let item = event.target.parentElement;
//         item.classList.add("slideOut");
//         item.addEventListener('transitionend',function(){
//             console.log("animation completed")
//             // ivadey aan ippo remove kodukkunney
//         // item.remove()
//         })
//         // animation kayinjitt remove aavan
//         // console.log(item)
//         item.remove()
//     }
// }

// function editKitchenItem(event) {
//     if(event.target.classList[1] === "fa-edit") {
//         let editedValue = prompt("PLEASE ADD NEW ITEM")
//         let item = event.target.parentElement;
//         item.innerText = editedValue    
//     }
// }


// // step 1   
// //Add an even lisner to the button 
// addBtn.addEventListener('click',addKitchenItemss)
// kitchenItemList.addEventListener("click",deleteKitchenItem)
// kitchenItemList.addEventListener("click",editKitchenItem)









// edit cheyyummboledit and delete i tag pokunnu edit cheythathinn shesha
//  athin solution puthiya div aan span enn oru div undakam ath change aatal mathi li full matranda 



// // Adding  edit button i tag

// let kitchenInput = document.getElementById("kitchen-input")
// let addBtn = document.getElementById("add-btn")
// let kitchenItemList = document.getElementById("kitchen-item-list")

// // step2 
// // Add kitchen items

// function addKitchenItemss() {

//     // asign imput values in a variable
//     let kitcheninputData = kitchenInput.value;

//     // create DOM elements now

//     let li = document.createElement("li");

//     //span add cheyyam li inghaney kodukunnathin pakaram 
//     let spanEl = document.createElement('span')
//     li.appendChild(spanEl)
//     spanEl.innerText = kitcheninputData

//     //li.innerText = kitcheninputData; // ithiley data aan spanil vareyndath
//     // ividey nammal cheythath  nammal span element create cheythu list itethintey akatheykk ullileyk enitt kitcheninputdata  ithiney nammal span elementileyk koduthu in li ntey ulliley spanin aan value kituka input text
//     // ini baki editil change cheyyanam


//     // animation add cheyyam cssText ithil namuk orupad karinghal orumich kodukkam
//     li.style.cssText = "animation-name: slideIn;";

//     // htmlil value kond varan append cheyyanam ul ntey ullil append cheyyam 
//     kitchenItemList.appendChild(li)

//     // type cheyth kayinjal empty aavan box
//     kitchenInput.value = ''

//     // box ley focus veran
//     kitchenInput.focus()

//     console.log(li)


//     // create Trash Button    // inghney aan htmilileey oru karyathey kond verunnath append cheyth

//     let trashBtn = document.createElement("i")
//     trashBtn.classList.add("fa","fa-trash");
//     li.appendChild(trashBtn)
//     console.log(trashBtn)

//     // create Edit button  // inghney aan htmilileey oru karyathey kond verunnath append cheyth
//     let editBtn = document.createElement("i")
//     editBtn.classList.add("fa","fa-edit")
//     li.appendChild(editBtn)
// }

// function deleteKitchenItem(event) {
//     console.log(event.target.classList[1])

//     if(event.target.classList[1] === "fa-trash" ) {

//         // namuk dlete akendat parent elementney aan li athiney edukkan aan variablileykk asign cheythu 
//         // ithiley event.target i aan athintey patent li aan li yudey patent ul
//         let item = event.target.parentElement;
//         item.classList.add("slideOut");
//         item.addEventListener('transitionend',function(){
//             console.log("animation completed")
//             // ivadey aan ippo remove kodukkunney
//         // item.remove()
//         })
//         // animation kayinjitt remove aavan
//         // console.log(item)
//         item.remove()
//     }
// }

// function editKitchenItem(event) {
//     if(event.target.classList[1] === "fa-edit") {
//         let editedValue = prompt("PLEASE ADD NEW ITEM")
//         let item = event.target.parentElement;

//         // ivadey iem.queruselector ennal list item aan eppoyu docoment.qureyselector venam enn illa ippo namma item.queryselector vilichu item ennal list item aan itethintey ullil ullathiney edukkan document venda 
//         // document enn parayunnath mothathil aannammalk ipp list itethintey ullil ullathiney mathi eathano parent ath vech vilikam 
//         let spanEl = item.querySelector('span')
//         console.log(spanEl)

//         spanEl.innerText = editedValue; 
//         // item.innerText = editedValue    // ini ith venda value spanil aan
//     }
// }


// // step 1   
// //Add an even lisner to the button 
// addBtn.addEventListener('click',addKitchenItemss)
// kitchenItemList.addEventListener("click",deleteKitchenItem)
// kitchenItemList.addEventListener("click",editKitchenItem)

















// today storing local storage 

// what is local storage normally we store data database or forms some cases we need store datas in local storage 
// console applicaato there is local storage
// nammal ippol cheyunn project just refresh cheythal ella datasum delete aayi pokum so nammalk local storage use cheyyam 


//Local Storage 

// local storage use cheyyan nammali Window.localstorage enn koduth usecheyyam 

// Set data to local storage

//value sett cheyyam ippo nammal window.localstorage use cheyyunilla only localstorage.setItem()
// localStorage.setItem("name","adhi")
// localStorage.setItem("passion","coding")


// Get data to local sorage 

//set cheytha value edukkan localstorage.getItem
//localStorage.getItem("name") // ee value namuk edukkan  oru variabilileyk assign cheyyanam

// let name1 = localStorage.getItem("name") 
// console.log(name1)






// nammudey project task nammal text cheyunna ite appol thanney local storagil store aavanam ath set item ini get item vech thirich aa value listil kanikanam 
// athava nammal value type cheyyunnath local storagil store aavanam aa sore aaya get vayi nammudey listil show cheyanam userk kananam



















// // Adding  datas in local storage storage

// let kitchenInput = document.getElementById("kitchen-input");
// let addBtn = document.getElementById("add-btn")
// let kitchenItemList = document.getElementById("kitchen-item-list")


// // nammalk ippo oru error kittum kitchenInput is not defined bcz namala local scop aan functiontey ullil aan declare chey ath global aakam
// let kitcheninputData;


// //ivqadey aan ippo clean akan vendi localstorage function eyuthunnath
//     function setlocalstorage(){
//         localStorage.setItem("kitchenInput",kitcheninputData)
//     }

//     function getlocalstorage() {
//         kitchenInput = localStorage.getItem("kitchenInput")
//     }

//     console.log(kitchenInput)


// // step2 
// // Add kitchen items

// function addKitchenItemss(event) {
//     // namal vale ivadey aan store aavunnath 
//     // let kitcheninputData = kitchenInput.value;
//     // ithiley let oyivakam namuk let kitcheninputData globally eythittund topil thottu meley ullath updated thayey

//     kitcheninputData = kitchenInput.value;

// // set to localstorage        // eeee set itethileyk rand value aan vendath 1-key 2-value // key enthum kodukan nammal ippo  kitcheninput enn kodukunnu

//     // localStorage.setItem("kitchenInput",kitcheninputData)

// //Get from local storage // value edukanamenkil athyam oru variablileyk value store cheyyanam 

//     // kitcheninputData = localStorage.getItem("kitchenInput")
//     // console.log(kitcheninputData)


// // codeney onn cleanup aakanam athava nammal eyuthunnath oru function aayitt aanankil verey ullaverk manasilakan easy aavum so namuk ith oru function aakam local storage
// //  ithin vendil topil function eyuthittund setlocalstorage enn paranj
// // ini meley undakiyathiney call aakam setneyum getneyum

// // set to localstorage
//     setlocalstorage()

// //Get from local storage
//     getlocalstorage()

//     console.log(kitchenInput)

// // Create Dom elemet now
//     let li = document.createElement("li");

//     let spanEl = document.createElement('span')
//     li.appendChild(spanEl)
//     spanEl.innerText = kitcheninputData
//     kitchenItemList.appendChild(li)
//     console.log(kitchenInput.value)
//     kitchenInput.value = ''
//     // kitchenInput.focus()



//     let trashBtn = document.createElement("i")
//     trashBtn.classList.add("fa","fa-trash");
//     li.appendChild(trashBtn)

//     let editBtn = document.createElement("i")
//     editBtn.classList.add("fa","fa-edit")
//     li.appendChild(editBtn)
// }

// function deleteKitchenItem(event) {

//     if(event.target.classList[1] === "fa-trash" ) {


//         let item = event.target.parentElement;
//         item.classList.add("slideOut");
//         item.addEventListener('transitionend',function(){

//         })

//         item.remove()
//     }
// }

// function editKitchenItem(event) {
//     if(event.target.classList[1] === "fa-edit") {
//         let editedValue = prompt("PLEASE ADD NEW ITEM")
//         let item = event.target.parentElement;


//         let spanEl = item.querySelector('span')
//         console.log(spanEl)

//         spanEl.innerText = editedValue; 
//     }
// }


// // step 1   
// //Add an even lisner to the button 
//     addBtn.addEventListener('click',addKitchenItemss)
//     kitchenItemList.addEventListener("click",deleteKitchenItem)
//     kitchenItemList.addEventListener("click",editKitchenItem)






// // Adding  datas in local storage storage

// let kitchenInput = document.getElementById("kitchen-input");
// let addBtn = document.getElementById("add-btn");
// let kitchenItemList = document.getElementById("kitchen-item-list");

// let kitcheninputData;
// let kitcheninputDataArray = [];

// // Set data in local storage
// function setlocalstorage() {
//     localStorage.setItem("kitchenInput", JSON.stringify(kitcheninputDataArray));
// }

// function getlocalstorage() {
//     kitchenItemList.innerHTML = "";
//     if(localStorage.getItem("kitchenInput")){
//         kitcheninputDataArray = JSON.parse(localStorage.getItem("kitchenInput"))
//         console.log(kitcheninputDataArray)

//     buildUI()    
//     }
// }

// function buildUI() {

//     kitchenItemList.textContent = ""

//     kitcheninputDataArray.forEach((item)=>{

//              //create DOM elements
//      const li = document.createElement("li");
//      const spanEl = document.createElement("span");
//      li.appendChild(spanEl);
//      spanEl.innerText = item;
//      kitchenItemList.appendChild(li);
//      kitchenInput.value = "";
//      kitchenInput.focus();
 
//      //create trash btn
//      let trashBtn = document.createElement("i");
//      trashBtn.classList.add("fa", "fa-trash");
//      li.appendChild(trashBtn);
 
//      // create Edit button
//      const editBtn = document.createElement("i");
//      editBtn.classList.add("fa", "fa-edit");
//      li.appendChild(editBtn);  

//     })


// }


// // Add kitchen items to the list
// function addKitchenItemss(event) {
//     // const inputValue = kitchenInput.value.trim(); // Trim whitespace

//     // if (!inputValue) {
//     //     alert("Please enter a valid kitchen item!");
//     //     return;
//     // }

//     kitcheninputData = kitchenInput.value;
//     kitcheninputDataArray.push(kitcheninputData)


//     setlocalstorage()

//     getlocalstorage()

   



// }

// // Delete kitchen items
// function deleteKitchenItem(event) {
//     if (event.target.classList.contains("fa-trash")) {
//         const item = event.target.parentElement;
//         item.remove(); // Directly remove the list item
//     }
// }

// // Edit kitchen items
// function editKitchenItem(event) {
//     if (event.target.classList.contains("fa-edit")) {
//         const item = event.target.parentElement;
//         const spanEl = item.querySelector("span");

//         const editedValue = prompt("Edit your kitchen item:", spanEl.innerText);
//         if (editedValue) {
//             spanEl.innerText = editedValue.trim(); // Update with trimmed value
//         }
//     }
// }

// // Add event listeners
// addBtn.addEventListener("click", addKitchenItemss);
// kitchenItemList.addEventListener("click", (event) => {
//     deleteKitchenItem(event);
//     editKitchenItem(event);
// });









//ai code bottom

// Adding  datas in local storage storage

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemList = document.getElementById("kitchen-item-list");

let kitcheninputData;
let kitcheninputDataArray = [];

// Set data in local storage
function setlocalstorage() {
    localStorage.setItem("kitchenInput", JSON.stringify(kitcheninputDataArray));
}

function getlocalstorage() {
    kitchenItemList.innerHTML = "";
    if (localStorage.getItem("kitchenInput")) {
        kitcheninputDataArray = JSON.parse(localStorage.getItem("kitchenInput"));
        console.log(kitcheninputDataArray);
        buildUI();
    }
}

function buildUI() {
    kitchenItemList.textContent = "";

    kitcheninputDataArray.forEach((item, index) => {
        // Create DOM elements
        const li = document.createElement("li");
        const spanEl = document.createElement("span");
        spanEl.innerText = item;
        li.appendChild(spanEl);
        kitchenItemList.appendChild(li);
        kitchenInput.value = "";
        kitchenInput.focus();

        // Create trash btn
        let trashBtn = document.createElement("i");
        trashBtn.classList.add("fa", "fa-trash");
        li.appendChild(trashBtn);

        // Create Edit button
        const editBtn = document.createElement("i");
        editBtn.classList.add("fa", "fa-edit");
        li.appendChild(editBtn);

        // Add event listeners for delete and edit
        trashBtn.addEventListener("click", () => deleteKitchenItem(index));
        editBtn.addEventListener("click", () => editKitchenItem(index));
    });
}

// Add kitchen items to the list
function addKitchenItemss(event) {
    kitcheninputData = kitchenInput.value.trim(); // Trim whitespace

    if (!kitcheninputData) {
        alert("Please enter a valid kitchen item!");
        return;
    }


    kitcheninputDataArray.push(kitcheninputData);
    setlocalstorage();
    getlocalstorage();
}

// Delete kitchen items
function deleteKitchenItem(index) {
    kitcheninputDataArray.splice(index, 1);
    setlocalstorage();
    getlocalstorage();
}

// Edit kitchen items
function editKitchenItem(index) {
    const editedValue = prompt("Edit your kitchen item:", kitcheninputDataArray[index]);
    if (editedValue) {
        kitcheninputDataArray[index] = editedValue.trim(); // Update with trimmed value
        setlocalstorage();
        getlocalstorage();
    }
}

// Add event listeners
addBtn.addEventListener("click", addKitchenItemss);

// Load data from localStorage when the page loads
document.addEventListener("DOMContentLoaded", getlocalstorage);