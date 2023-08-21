import displayImgs from "./scripts/displayImgs.js";
import searchBarDisplayer from "./scripts/searchBarDisplayer.js";
import imgGallery from "./scripts/imgGallery.js";

//wyswietlanie wyszukiwarki
searchBarDisplayer()
//wyświetlanie obrazów
displayImgs()
//galeria
imgGallery()

let macy = Macy({
    container: '.grid',
    columns: 3,
    margin: {x: 35, y: 35},
    breakAt: {
        700: {
            columns: 2
        },
        500: {
            columns: 1
        }
    }
})

export default macy