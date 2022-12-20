const btn = document.querySelector("#btn")
const inputs = Array.from(document.querySelectorAll("input[name='stars']"))

const insertRating = document.querySelector("#insert-rating")

const ratingCard = document.querySelector(".rating-card")
const tyCard = document.querySelector(".ty-card")

const message = document.querySelector("#message")

btn.addEventListener("click", () => {

    let selectedRating

    for (const input of inputs) {
        if (input.checked) {
            selectedRating = input.value
            break
        }
    }

    if (selectedRating) {
        insertRating.textContent = selectedRating
        ratingCard.classList.add("hidden")
        tyCard.classList.remove("hidden")
    } else {
        message.textContent = "You haven't selected any rating"
    }
})




