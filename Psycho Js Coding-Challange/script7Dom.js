const files = [
    // "  https://demo-source.imgix.net/plant.jpg", // inghaney aan so namuk hhtp ellam ithilott add cheyth eukkam so thayey ullathintey http kalanj functionil add cheyyam
    "   scooter.jpg",
    "sneakers.jpg  ",
    "    snowboard.jpg  "
]


// Here we have an images array. This array has empty spaces and empty items

// Challenge :
// 1) Create a new array where the array has only the file names, no more empty items ('')
// 2) Create a list using dom operations
// 3) Display images from array were "&w=200" to DOM.
// 4) Also note that we need to add 'https://demo-source.imgix.net/' before each images



console.clear()

let getImages = (imgCollections)=>{
   const selectedImages = imgCollections
   .map((imgSrc) => imgSrc.trim())
// .filter((imgSrc)=>imgSrc.length !==0 && imgSrc.match(/w=200(?=&q)/)); // regex(/w=200(?=&q)/) // namuk ivadey venda ith nammudey image linkil illa .filter thann venda namuk filter cheyth edukkanda .mapum venda namudey image link erey aaan
    .map((imgSrc)=> `https://demo-source.imgix.net/${imgSrc}`)
//    console.log("images",selectedImages)

   return selectedImages
};
 
function addImages(){
    let selectedImgs = getImages(files)
    console.log(selectedImgs)
    if(!selectedImgs) 
    return 

    const galleryEl = document.querySelector('.gallery')

        selectedImgs.forEach((imgSrc)=>{
            const galleryLiEl = document.createElement("li")
            // console.log(galleryEl)
            const galleryLiImg = document.createElement("img");
            galleryLiImg.setAttribute('src', imgSrc) // setatribute img tag ntey ullil src enna atribute und ath add aakaan
            galleryLiEl.appendChild(galleryLiImg)
            galleryEl.appendChild(galleryLiEl)
            console.log(galleryLiEl)


            
        })
}
addImages()






// const imgURL= 'https://images.unsplash.com/';
// const blacklist = ['&w=200&q=200'] 
// const files Filtered = 
//         files.filter(url => blacklist.some(e => url.includes(e)))
//          console.log(filesFiltered);
//      let filteredFiles = filesFiltered.forEach((item) =>{
//         img = new Image();
//         img.src = imgURL+item; 
//         img.style.width = '200px' 
//         document.getElementById('result').appendChild(img); 
//     });  // inghaney array create aakiyum namuk arayil ninn vendath edukkam or meley ulla regex