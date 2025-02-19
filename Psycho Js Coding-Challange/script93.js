// Challenge 11

// Calculate the Total priceof Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it -
// as a number. A grocery object has a product, a quantity and a price, for example:

// {
//     "product": "Milk",
//     "quantity": 1,
//     "price": 1.50
// }

// Examples
// 1 bottle of milk:
// getTotalPrice([
//     {"product": "Milk", "quantity": 1, "price": 1.50}
// ]) --> 1.5

// 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//     {"product": "Milk", "quantity": 1, "price": 1.50},
//     {"product": "Banana", "quantity": 1, "price": 2.50}
// ]) --> 4

// 3 bottle of milk :
// getTotalPrice([
//     {"product": "Milk", "quantity": 3, "price": 1.50}
// ]) --> 4.5

// Several groceries:
// getTotalPrice([
//     {"product": "Milk", "quantity": 1, "price": 1.50},
//     {"product": "Egg", "quantity": 12, "price": 0.10},
//     {"product": "Bread", "quantity": 2, "price": 1.60},
//     {"product": "Cheese", "quantity": 1, "price": 4.50}
// ]) --> 10.4

// Some cheap candy :
// getTotalPrice([
//     {"product": "Chocolate", "quantity": 1, "price": 0.10},
//     {"product": "Lolipop", "quantity": 1, "price": 0.20}
// ]) --> 0.3

// https://demo-source.imgix.net/

// Solution

console.clear()

// Global Data 
//--------------------------------

const groceries = [
    {"product": "Milk", "quantity": 1, "price": 1.50},
    {"product": "Banana", "quantity": 1, "price": 2.50},
    {"product": "Milk", "quantity": 1, "price": 1.50},
    {"product": "Egg", "quantity": 12, "price": 0.10},
    {"product": "Bread", "quantity": 2, "price": 1.60},
    {"product": "Cheese", "quantity": 1, "price": 4.50}
]
// console.log(Object.keys(groceries[0]))

// Get the titles
//--------------------------------
const getTitles = (groceries)=> {
    return Object.keys(groceries[0])
}

// Get the titles
//--------------------------------
const getValues = (groceries) =>{
 return groceries.map((groceryitem)=>{
    return Object.values(groceryitem)
 })
}

// Get total price of groceries
//--------------------------------
getTotalPrice = (groceries)=>{
    let totalCost = groceries.map((item)=>{
        return Object.values(item).slice(-2).reduce((acc,num)=> acc * num) // .values vech values eduthu .slice vech venda valuesney eduthu .reduce kittiya itethintey total outcome
    });
    return totalCost.reduce((acc,num)=> acc + num)
}

// Create UI
//--------------------------------

const createUI = ()=>{
    const groceriesParentEl = document.querySelector(".groceries");
    // const groceriesListItem = document.createElement("li") // namuk oru list item pora ellam venam co ith mappil idam thayey
    // groceriesParentEl.appendChild(groceriesListItem)     //thayey add akitund ivadnn mati                                  // oru parentint akath oru div or elemt kond veran parent.appentchild

    // Go and get the titles from groceries
    let titles = getTitles(groceries)
    titles.map((title)=>{
        // console.log(title.charAt(0).toUpperCase()+title.slice(1))// enghaney first letter capital aakam //chatAt(0) arrayil eath posiltionil ulla values aano athiney eduth tharum //slice(1) athyathey value kalayum bakki ulla values namuk tharum
        const groceriesListItem = document.createElement("li")
        groceriesListItem.innerHTML = title.charAt(0).toUpperCase()+title.slice(1);                                // html aayi value add cheyyan innerHtml
        groceriesParentEl.appendChild(groceriesListItem)
        
    })

    // Go and get the values from groceries

    let groceryValues = getValues(groceries);
    groceryValues.map((item)=>{ // ith array of arrays aan so first arrayil ullath edukkam
        item.forEach((value)=>{               // ee arryk ullil kidakunna values edukkam
            const groceriesListItem = document.createElement("li")
            groceriesListItem.innerHTML = value;
            groceriesParentEl.appendChild(groceriesListItem)

        })
    })

    // Get Total Price
    //--------------------------------

    const totalPrice = getTotalPrice(groceries);
    const totalPriceEl = document.getElementById('totalPrice')
    totalPriceEl.innerHTML = `$ ${totalPrice.toFixed(2)}   `;
    console.log(totalPrice)
}
createUI()
getTotalPrice(groceries) 



