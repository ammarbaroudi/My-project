let menuToggle=document.querySelector('.button')
let menu=document.querySelector(".main-nav")
let tabs=document.querySelectorAll(".tabs li")
let tabsArray=Array.from(tabs)
let content=document.querySelectorAll(".text-content > div")
let ContentArray=Array.from(content)

menuToggle.addEventListener('click', ()=>{
menu.classList.toggle('active')

})


tabsArray.forEach((ele)=>{
ele.addEventListener("click",function(e){
tabsArray.forEach((e)=>e.classList.remove("active"))
e.currentTarget.classList.add("active")
ContentArray.forEach((div)=>div.style.display="none")
document.querySelector(e.currentTarget.dataset.cont).style.display="block"
})

})