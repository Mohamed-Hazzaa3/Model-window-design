'use strict'
const bttn =document.querySelectorAll(".bttn");
const box=document.querySelector(".box");
const bttnClose=document.querySelector(".close-modal");
const overlay=document.querySelector(".overlay");
const openModel=function(){
    box.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModel=function(){
    box.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0;i<bttn.length;i++)
    bttn[i].addEventListener('click',openModel);

 

bttnClose.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);


document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !box.classList.contains('hidden'))
    closeModel();

});