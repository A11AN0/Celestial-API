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

const obtainCelestialBody = async () => {
    const searchTerm = input.value
    try{
        const res = await fetch(`https://localhost:9000/api/celestialBodyList/${searchTerm}`)
        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}


input.addEventListener('focus', ()=>{
    input.addEventListener('keydown', (event)=>{
        if(event.key === 'Enter'){
            console.log('hi')
        }
    })
})