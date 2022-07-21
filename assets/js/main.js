const colourInput = document.getElementById('colour')
const bgColour = document.getElementById('body')

function changeColour() {
    bgColour.style.background = colourInput.value
}