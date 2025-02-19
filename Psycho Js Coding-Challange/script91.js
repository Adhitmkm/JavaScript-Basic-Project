// Challenge 10

// There are 5 colors si it takes 2 sec to each color each one ( 2 * 5 = 10)
// You need to switch the pencil 4 time and it takes 1 sec to switch (1 * 4 = 4)
// 10+4 = 14

// colorPatternTimes(["Blue"]) --> 2

// colorPatternTimes(["Red","Yellow","Green","Blue"]) --> 11

// colorPatternTimes(["Blue","Blue","Blue","Red","Red","Red"]) --> 13

// Solution 

console.clear()

// const colorPatternTimes = (colors)=> {
//    let switchPencilTime = 0
//     for (let i=0; i< colors.length -1; i++){
//         for(let j=i; j<= i+1; j++) {
//             if(colors[i] !== colors[j]) {
//                 switchPencilTime++;
//             }
//         }
//     }
//     const timeToColorAsquare = colors.length * 2
//     return  switchPencilTime + timeToColorAsquare;
// }
// let result = colorPatternTimes(["Blue"])
// console.log(result)

// // colorPatternTimes(["Blue","Blue","Blue","Red","Red","Red"])


// another way finding solution

const colorPatternTimes = (colors)=> {
       let totalTime = colors.map((color,index,arr)=> color !== arr[index+1] ? 1 : 0)
       .slice(0,-1)
       .reduce((acc, number)=> acc + number, colors.length * 2);
       return totalTime;

    }

let result = colorPatternTimes(["Blue"])
console.log(result)




// arrays are special type of object










// loop working

// i = 0;
// j = 0
// 0 <= 1;
// blue 
// ----------------
// i = 0
// j = 1
// 1 <= 1
// ---------------
// i = 0
// j = 2
// 2 <= 1