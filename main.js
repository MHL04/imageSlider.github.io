/*recuperation des element Html */
const nextEl=document.querySelector(".next");
const imageContainerEl=document.querySelector(".image-container");
const imgEl=document.querySelectorAll("img");
const prevEl=document.querySelector(".prev");

let currentImg= 1 ;

let timeout;

/* entendre le click sur les elements << >> avec la fx updateImg */
 nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();

 });
 prevEl.addEventListener("click", () =>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});
/*fx updateImg, */
 let updateImg=() =>{
   if(currentImg>imgEl.length){
    currentImg=1;
   }else if(currentImg<1){
    currentImg=imgEl.length;
   }
   //la propriete transfrom=translate permet de voir lautre image precendent
    imageContainerEl.style.transform=`translateX(-${( currentImg - 1) * 500}px)`;
timeout =setTimeout(()=>{
    currentImg++;
    updateImg();
},3000);

 }
