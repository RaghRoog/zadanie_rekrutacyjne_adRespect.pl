export default function searchBarDisplayer() {
    let searchIcon = document.querySelector('.search-icon')
    let searchFrom = document.querySelector('.search-form')
    searchIcon.addEventListener('click', () => {
        searchFrom.classList.toggle('search-form-display-flex')
    })
}