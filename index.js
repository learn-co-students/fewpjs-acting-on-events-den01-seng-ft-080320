let dodger = document.getElementById("dodger")

dodger.style.background = "#FF69B4"

dodger.style.bottom = "0px"

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {

        moveDodgerLeft()
    }
})
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight()
    }
})
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`

    }
}


function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(rightNumbers, 10)

    if (left > 0) {
        dodger.style.left = `${left + 1}px`

    }
}