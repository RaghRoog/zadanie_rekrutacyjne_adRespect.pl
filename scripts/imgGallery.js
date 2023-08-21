let imgs = document.querySelectorAll('.grid-item')
let gallery = document.querySelector('.gallery')
let closeBtn = document.querySelector('.close-gallery')
let index = 0
let nextBtn = document.querySelector('.gallery-next')
let prevBtn = document.querySelector('.gallery-prev')
let src
let gallerySlide = document.querySelector('.gallery-slide')

export default function imgGallery() {
    openGallery()
    closeGallery()
    nextSlide()
    prevSlide()
}

function openGallery() {
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            gallery.style.display = 'flex'
            document.body.style.overflow = 'hidden'
            index = parseInt(img.getAttribute('data-index'))
            src = imgs[index].children[0].src
            displaySlide()
        })
    })
}

function displaySlide() {
        gallerySlide.children[0].src = src
        gallerySlide.style.display = 'block'
}

function closeGallery() {
    closeBtn.addEventListener('click', () => {
        gallery.style.display = 'none'
        document.body.style.overflow = 'visible'
    })
}

function nextSlide() {
    nextBtn.addEventListener('click', () => {
        if(index < imgs.length-1){
            index += 1
            src = imgs[index].children[0].src
            displaySlide()
        }
    })
}

function prevSlide() {
    prevBtn.addEventListener('click', () => {
        if(index > 0){
            index -= 1
            src = imgs[index].children[0].src
            displaySlide()
        }
    })
}