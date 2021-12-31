const content = document.querySelector('.content');
const sketch = document.querySelector('#sketch');
const clearButton = document.querySelector('#clear-button');
const colorPick = document.querySelector('#color-pick');
const eraser = document.querySelector('#eraser');
const randomColorButton = document.querySelector('#random-color');
const squareRange = document.querySelector('#square-range');
const currentSquaredAmount = document.querySelector('#corrent-amount');
let eraseIsOn = false;
let pickedColor = '';
function randomRumber(toWhichNumber) {
    return Math.floor(Math.random() * toWhichNumber + 1)
}
function createDivs(divs) {
    sketch.innerHTML = '';
    divs = +divs
    const totalNumberOfDiv = divs ** 2
    for (let i = 0; i < totalNumberOfDiv; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('innerDiv')
        newDiv.style.width = `${550 / divs}px`
        newDiv.style.height = `${550 / divs}px`
        sketch.appendChild(newDiv);
    }
}
createDivs(16);
squareRange.addEventListener('input', function () {
    currentSquaredAmount.innerHTML = `${squareRange.value} X ${squareRange.value}`
    createDivs(squareRange.value);
    colorDivs();
})

function randomColor() {
    return `rgb(${randomRumber(255)}, ${randomRumber(255)}, ${randomRumber(255)})`
}

    clearButton.addEventListener('click', function () {
        const innerDivs = document.querySelectorAll('.innerDiv');
        innerDivs.forEach((div) => {
            div.style.backgroundColor = '';
        })
    })


colorPick.addEventListener('input', function () {
    pickedColor = colorPick.value;
})
eraser.addEventListener('click', function () {
    eraser.classList.toggle('clicked');
})
randomColorButton.addEventListener('click', function () {
    randomColorButton.classList.toggle('clicked');
})
function colorDivs() {
    const innerDivs = document.querySelectorAll('.innerDiv');
    innerDivs.forEach((div) => {
        div.addEventListener('mouseenter', function () {
            if (eraser.classList.contains('clicked')) {
                div.style.backgroundColor = 'white';
            }
            else if (randomColorButton.classList.contains('clicked')) {
                div.style.backgroundColor = randomColor();
            }
            else if (!pickedColor == '') {
                div.style.backgroundColor = pickedColor;
            }
            else { div.style.backgroundColor = randomColor(); }
        })
    })
}
colorDivs()