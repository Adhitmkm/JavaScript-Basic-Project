// let a = "a";
// let b = "b";
// let c = "c";
// let d = "d";

// console.log(d);
// d = "z";
// console.log(d)

// let f = ["f","g","h","i"]
// console.log(f)

// console.log(f[2])
// console.log(f[1])
// console.log(f[0])
// console.log(f[3])






















// asining new value in array position 













//  f[1]="k"

//  console.log(f[1])















// single value kittan document.queryselector("li")
// li ulla ella values venam athi y\js ulla function aan  document.queryselectorAll("li")

// 1 nnil athikal values undakil store cheyyunnath arrayil aan

















// let item = ["item0","item1","item2","item3",]

// console.log(item)

// let allLi = document.querySelectorAll("li")
// console.log(allLi)

// allLi[0].innerText = item[0]
// allLi[1].innerHTML = item[1]
// allLi[2].innerHTML = item[2]
// allLi[3].innerHTML = item[3]






















//inghane 50 ennam undankil orooninney vilich values kodukkannuath task aan posible alla athin pakaram manully allathey dynamically add akaam
//  ithin vendi important aaya onn  aan for enna function  
//eg  let currypowder = ["salt","peper","sugar","chili",]



//methods 
//1- for()
//2- forEach


// method 1 

// for (let powder of kitchenitems)

// arrayiley orroro itethineyum eduthitt enthankilum cheyyanamenkil for()  use cheyyum




















// let currypowder = ["salt","peper","sugar","chili","chiken powder"]
// let kitchenitemsLi = document.getElementById("kitchen-items")

// for(let powder of currypowder) {
//     let li = document.createElement("li")
//     console.log(li)
//     li.innerText = powder;
//     kitchenitemsLi.appendChild(li)
//     console.log(li)

// }






























// console.log(kitchenitemsLi)
// let li = document.createElement("li")
// console.log(li)
// li.innerText = po


//method 2 
//forEach()










































// let currypowder1 = ["salt1","peper2","sugar3","chili4","chiken powder5"]
// console.log(currypowder1)
// let kitchenitemsLi1 = document.getElementById("kitchen-itemss")
// console.log(kitchenitemsLi1)

// currypowder1.forEach(function(powder1){
//     let li = document.createElement("li")
//     li.innerText = powder1;
//     kitchenitemsLi1.appendChild(li)
// })








































//array methods

// 1.push()
// 2.pop()
// 3.shift()
// 4.unshift()
















// 1.push() 

//step 1 : Find all list items here

let allListItems = document.querySelectorAll("li")
let powderArray = []


//step 2 : Iterate all list items
allListItems.forEach(function(listItem){
    let listItemText = listItem.innerText

    //step 3 : Push all list item content to a new array
    powderArray.push(listItemText)
    

})

allListItems.forEach(function(listItem){
    let listItemText = listItem.innerText


})

console.log(powderArray)


let 















// for() and forEaach() difrence vechal forEach() il namuk index value or position edukkan pattum parameter aayit koduthal namuk value edukan patum
// eg  currypowder.forEach(function(powder , index){console.log(index)} ithil index or enth nae veneylum kodukam inghaney oru feture koodi und forEachil






// let kitchenitemsLi = document.getElementById("kitchen-items")
// console.log(kitchenitemsLi,"mmmmmmmmmmmm")
// let curryPowder = ["salt","peper","sugar","chili","chiken powder"]


// curryPowder.forEach(function(powder , index){

//     console.log(index);
//     let li = document.createElement("li")
//     li.innerText = powder;
//     kitchenitemsLi.appendChild(li)
// }) 


// namuk 1 2 3 anghanet list aayi kittan 


// let kitchenitemsLi = document.getElementById("kitchen-items")
// console.log(kitchenitemsLi,"mmmmmmmmmmmm")
// let curryPowder = ["salt","peper","sugar","chili","chiken powder"]


// curryPowder.forEach(function(powder , index){

//     console.log(index);
//     let li = document.createElement("li")
//     // ithil index +1 kodukkan kaeanam aray start 0 aan real lifil 1 muthal aan aathukond aan +1 koodey aakiyey
//     li.innerText = `${index +1} ${powder}`
//     kitchenitemsLi.appendChild(li)
// }) 