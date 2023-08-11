console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

window.addEventListener('load', function(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => appendDogs(dogs))
    .catch(e => console.log(e))
})

function appendDogs(dogs){
    let imageContainer = document.querySelector('#dog-breeds')
    // console.log(dogs.message[0])
    for(image of dogs['message']){
        // console.log(image)
        let dogsList = document.createElement('li')
        dogsList.innerHTML = `
            <img src=${image}/>
        `
        imageContainer.appendChild(dogsList)
    }
}