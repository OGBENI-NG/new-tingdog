import dogs from "./data.js"
const likeEl = document.getElementById("like")
const nopeEl = document.getElementById("nope")
const dogData = document.getElementById("dog-data")
const likeBadge = document.getElementById("like-badge")
let index = 0

// renderDogData from import dogs
function renderDogData() {
    let item = dogs[index]
    const dogDataHtml = `
        <div class="dog-container">
            <div class="img-container">
                <img src="${item.avatar}" alt="${item.name}" class="dogs">
            </div>
            <div class="dogs-names-container">
                <h1>${item.name}, <span>${item.age}</span></h1>
                <p>${item.bio}</p>
            </div>
        </div>
    `
    dogData.innerHTML = dogDataHtml
}

// Display the like badge with a 
// specified source and hide it after 1.5 seconds
function showBadge(src) {
    likeBadge.style.display = "block"
    likeBadge.src = src
    setTimeout(() => {
        likeBadge.style.display = "none"
        index++
        if (index >= dogs.length) {
            index = 0
        }
        renderDogData()
    }, 1500)
}

// Event listener for the "nope" button
nopeEl.addEventListener("click", () => {
    const item = dogs[index]
    item.hasBeenSwiped = true
    showBadge("images/badge-nope.png")
})

// Event listener for the "like" button
likeEl.addEventListener("click", () => {
    const item = dogs[index]
    item.hasBeenLiked = true
    showBadge("images/badge-like.png")
})

// Initial rendering of dog data
renderDogData()
