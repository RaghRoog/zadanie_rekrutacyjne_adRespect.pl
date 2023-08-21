import macy from '../script.js'

export default function displayImgs() {
    let btn = document.querySelector('.display-btn')
    let imgs = document.querySelectorAll('.not-displayed')
    let imgsContainer = document.querySelector('.photos-container')
    let gradient = document.querySelector('.gradient')
    let displayed = false
    btn.addEventListener('click', () => {
        displayed = !displayed
        imgs.forEach(img => {
            img.classList.toggle('display-imgs')
        })
        gradient.style.display = 'none'
        macy.recalculate()
        if(!displayed){
            imgsContainer.style.height = '160vh'
            gradient.style.display = 'block'
            window.location.reload()
        }
        btn.children[0].innerHTML = 'Zwiń'
        btn.children[1].style.transform = 'rotate(180deg)'
        btn.style.bottom = '10px'
    })
}