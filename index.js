const container = document.querySelector(".container");
const sketchContainer = document.querySelector(".sketch-container");
const dimensionButton = document.querySelector("#dimensions-button");
let activeScreen = undefined;

dimensionButton.addEventListener("click", e => {
    if (activeScreen != undefined) {
        activeScreen.remove();
    }
    let size = prompt("Please enter the grid size");
    createGrid(size);
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
                box.setAttribute("style", "background-color: black");
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