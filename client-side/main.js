const search = document.querySelector('.search')
const title = document.querySelector('h1')
const input = document.querySelector('input')

input.style.display="none"


title.addEventListener('mouseover', ()=>{
    title.style.display="none"
    input.style.display="initial"
})


input.addEventListener('mouseout', ()=>{
    title.style.display="initial"
    input.style.display="none"
})

