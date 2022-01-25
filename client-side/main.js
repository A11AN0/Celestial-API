const search = document.querySelector('.search')
const title = document.querySelector('h1')
const input = document.querySelector('input')
const navBar = document.querySelector('nav')
const body = document.querySelector('body')
input.style.display="none"



const renderHTML = (input) => {
    currentStatus = input['Radius']

    return(
        `
        <li>Distance from Sun { ${input['Distance from Sun']} </li>
            <li>Orbital Period { ${input['Orbital Period']} </li>
            <li>Radius { ${input['Radius']}</li>
            <li>Length of Day { ${input['Length of Day']}</li> 
        `
    )
}

const capitalizeFirstLetter = (word) =>{
    return word[0].toUpperCase() + word.substring(1)
}

title.addEventListener('mouseover', ()=>{
    title.style.display="none"
    input.style.display="initial"
    navBar.style.visibility="hidden"
})


input.addEventListener('mouseout', ()=>{
    title.style.display="initial"
    navBar.style.visibility="visible"
    input.style.display="none"
    input.value = ""
    
})

const obtainCelestialBody = async () => {
    const searchTerm = input.value
    try{
        const res = await fetch(`http://localhost:9000/api/celestialBodyList/${searchTerm}`)
        const data = await res.json()
        navBar.innerHTML = renderHTML(data)
        title.innerText = capitalizeFirstLetter(searchTerm)
        navBar.style.visibility="visible"
        if(data['Orbital Period'] != 'unknown'){
            celestialBodyPic()
        }    
    }catch(err){
        console.log(err)
    }
}

const celestialBodyPic = async () => {
    const searchTerm = input.value
    try{
        const res = await fetch(`http://localhost:9000/images/${searchTerm.toLowerCase()}.jpeg`)
        body.style.backgroundImage=`url(${res.url})`
        console.log(res.url)
    }catch(err){
        console.log(err)
        body.style.backgroundImage=`url(Nebula.jpg)`
    }
}


input.addEventListener('focus', ()=>{
    input.addEventListener('keydown', (event)=>{
        if(event.key === 'Enter'){
            obtainCelestialBody()    
        }
    })
})


