 const nextEl=document.querySelector(".next");
const imageContainerEl=document.querySelector(".image-container");
const imgEl=document.querySelectorAll("img")
const prevEl=document.querySelector(".prev")

let currentImg= 1 ;


console.log(imgEl)

 nextEl.addEventListener("click", () => {
    currentImg++;
    updateImg();

 });
 prevEl.addEventListener("click", () =>{
    currentImg--;
    updateImg();
});

 let updateImg=() =>{
    if(currentImg > imgEl.lenght){
        currentImg=1;
    }
     else if(currentImg < 1){
        currentImg=imgEl.lenght;
    }
// imageContainerEl.style.transform=`translateX(-${currentImg -1 * 500}px)`;
    // imageContainerEl.style.transform=`translateX(-${currentImg- 1 *500}px)`;
    imageContainerEl.style.transform=`translateX(-${( currentImg - 1) * 500}px)`;

 }