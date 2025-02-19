console.clear()
const FRUITS = ["Banana","Apple","Orange","Lemon","Mango"];

// splice

FRUITS.splice(2,2) // ithil .splice(ivda index ethramuthal,ivada ethra value edukkanam)
console.log(FRUITS) // splice eenal nammadey ulla arrayil ninn kurach sathanathiney cut cheyth oyivakanam slice orginala arrayey mutate cheyyunnund

FRUITS.splice(2,1, "LICHY") //ippo 3 mathey aaley kalanj avdey Lichy yey add aaki
console.log(FRUITS) // splice eppoyum original arrayey mutate cheyyum

// slice

FRUITS.slice(1,2)  // ithil .slice(starting position, ending position) // slice ending position edukkthilla thottu munnathath mathram edukkullu// slice ith vech original arrayil oru mattavum veruthan pattilla
let filteredFRUITS = FRUITS.slice(1,2)
let filteredFRUITS1 = FRUITS.slice(0,-1) // ee arrayil ulla last valueney kalayum // slice oru copy create aakum venamenkil namuk oru arrayil ninn vendath ellam verey oru arra aayi edukkam its copy
console.log("Org Arr",filteredFRUITS) 


// arrays are special type of object imp
