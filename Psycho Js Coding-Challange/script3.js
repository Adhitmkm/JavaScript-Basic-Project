//CHALLENGE 3 : write a soluton that returns an array containing all the properties in the object it recieves an argument

console.clear()

let users = {
    Alan : {
        age : 27,
        online : false
    },
    Jeff : {
        age : 32,
        online : true
    },
    Sarah : {
        age : 48,
        online : false
    },
    Ryan : {
        age : 19,
        online : false
    },
};

let studentsList = document.querySelector('.students-list')

const solution = (data)=>{

    // let names = []

    // for (property of data)
    // {
    //     console.log(property)
    //     names.push(property)
    // }

    // ighaney nammal array create aaki athileykk vekkanda avishyam illa inbuit function und Obj 

    // let names = Object.keys(data) // objectl 2 karayanghal aan ullath properties and values// obj.keys vayi objectney array aakan pattum key aanankil properties mathram aan tharunnath athava alan jeff sarah ithin akath ulla values koodi kittanamankil object.values
    // console.log(names)

    // let names = Object.values(data)
    // console.log(names)
    // let age = names.map((val)=> val.age)
    // console.log(age) 
    // // namuk propertyum venam athintey ulliley values venna ellam array aayitt athin nammal Object.entries use cheyyum // ithil kittuka array of array //ippopropertiesum kitty valuesum kitty
    
    // let studentData = Object.entries(data)
    // console.log(studentData)

    // studentData.map((value)=>{
    //     // console.log(value[0])
    //     // console.log(value[1].age) // inghaney kodukkannath nalla oru reethi alla value[0] and  value[1].age so nammal ithiney destucure cheyth edukkanam
    // })        // ipo ee arayil 2 value an ulla eg 1 alan 2 object ithiney dextrucure aaki edukam ee studentData.map((value)=> ithney nammal maati athava value ney maati arrayil aaki names kodukkuka app namalk ee name vech vilichal mathi [name,valuesObj] inghaney

    let studentData = Object.entries(data)

        studentData.map(([names,valuesObj])=>{
            // console.log(name)
            // console.log(valuesObj.age)

            let listItem = document.createElement('li') // ith loopintey ullul aan so namuk li create aaki tharum
            listItem.innerHTML = `name is :${names}    <br> age is :${valuesObj.age}` // listitethilott name enna valueney add cheythu
            studentsList.appendChild(listItem) // nammaley htmileykk add aakanam meley nokku oru classs inghott kondu vannittund athileykk add akunnu ith 

        })


    // return names
}

console.log(solution(users))




// arraykk ullill 1 nnil athikam values undankil athiney namuk destructure cheyyan pattum ath poley objectneyum destructure cheyyan pattum
// studentData.map(([names,{age,online}])=>{  // object destructure ini values direct vilikam age
               // console.log(name)
            // console.log(age)

        //     let listItem = document.createElement('li') // ith loopintey ullul aan so namuk li create aaki tharum
        //     listItem.innerHTML = `name is :${names}    <br> age is :${age}` // listitethilott name enna valueney add cheythu
        //     studentsList.appendChild(listItem) // nammaley htmileykk add aakanam meley nokku oru classs inghott kondu vannittund athileykk add akunnu ith 

        // })


// 3 waysil object ney array aakam 
// 1- Object.key
// 2- Object.value
// 3- Object.entries





//eg imprtnt

// let places = ["malappuram","kollam","kozhikode"]

// for(let key of places) { // of use aakiyal arrayil ulla ella values kittum for loop onnum venda
//     console.log(places)
// }

// for(let key in places) { // in use aakiyal arrayil ullath ethra ennam aan ullath aa enna kittum for loop onnum venda
//     console.log(places)
// }

// ithil 2 lum key ennann koduthath avidey enth namum kodukkam


// objectintey casil in of diffrent aan in kodukkumbo objectil ulla values kittum athiley propertykittum 