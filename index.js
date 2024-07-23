const container = document.querySelector(".container");
const sketchContainer = document.querySelector(".sketch-container");
const dimensionButton = document.querySelector("#dimensions-button");
const colorButton = document.querySelector("#color-button");
let activeScreen = undefined;

let selectedColor = "#000000";

dimensionButton.addEventListener("click", e => {
    if (activeScreen != undefined) {
        activeScreen.remove();
    }
    let size = prompt("Please enter the grid size");
    createGrid(size);
})

colorButton.addEventListener("click", e => {
    selectedColor = prompt("Enter color or hex code");
})

function createGrid(size) {
    let screen = document.createElement("div");
    screen.setAttribute("class", "sketch-screen")
    sketchContainer.appendChild(screen);
    activeScreen = screen;
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        for (let c = 0; c < size; c++) {
            let box = document.createElement("div");
            box.setAttribute("class", "box");
            column.appendChild(box);

            box.addEventListener("mouseover", e => {
                box.setAttribute("style", "background-color: " + selectedColor);
            });
        }
        screen.appendChild(column);
    }
}

/*while (boxes > 0) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    div.appendChild(box);
    boxes--;

    box.addEventListener("mouseover", e => {
        box.setAttribute("style", "background-color: black");
    });
}*/