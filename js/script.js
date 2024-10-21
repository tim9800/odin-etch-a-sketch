const containerMain = document.createElement("div");
containerMain.setAttribute("id", "container-main");
document.body.appendChild(containerMain);

initalizeGrid(16);

containerMain.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-element")) {
        e.target.style.backgroundColor = 'red';
    }
}
)

const buttonResizeDiv = document.createElement("div");
const buttonResize = document.createElement("button");
buttonResizeDiv.setAttribute("id", "button-resize-div")
buttonResize.setAttribute("id", "button-resize");
buttonResize.textContent = "Click me to resize the grid!"

buttonResizeDiv.appendChild(buttonResize);
document.body.prepend(buttonResizeDiv);

buttonResize.addEventListener("click", (e) => {
    while (true) {
        newSize = prompt("How big do you want the new grid to be? (Value must be between 1 and 100)");
        if (newSize === null) {
            break;
        }
        if (!Number.isInteger(+newSize)) {
            alert("Please enter a whole number between 1 and 100.");
            continue;
        }
        if (!(+newSize >= 1 && +newSize <= 100)) {
            alert("Your number is not between 1 and 100. Please try again.");
            continue;
        }
        break;
    }
    
    containerMain.innerHTML = "";
    initalizeGrid(newSize);
})

function initalizeGrid(size) {
    for (let i=0; i<size; i++){
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");
        gridRow.setAttribute("style", "width:960px");
        gridRow.setAttribute("style", `height:${960/size}px`);
        containerMain.appendChild(gridRow);
    
        for (let j=0; j<size; j++){
            const gridCell = document.createElement("div");
            gridCell.setAttribute("class", "grid-element");
            gridCell.setAttribute("style", `width:${960/size}px`)
            gridRow.appendChild(gridCell);
        }
    }
}