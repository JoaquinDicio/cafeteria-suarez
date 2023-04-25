function init(){
    window.addEventListener('scroll',checkScroll)
}

function checkScroll(){
    const navbar = document.querySelector('#header')
    if (window.scrollY > 150) {
        navbar.classList.add('on-scroll')
    } else {
        navbar.classList.remove('on-scroll')
    }
}

function setGallery(){
    const images = document.querySelectorAll('.gallery-item')
    images.forEach((img)=>{
        const newLike = document.createElement('i')
        newLike.className='fa-regular fa-heart like-icon'
        newLike.addEventListener('click',(e)=>handleLike(e))
        img.appendChild(newLike)
    })
}

function handleLike(e){
    e.target.classList.toggle('liked')
}