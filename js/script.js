const containerMain = document.createElement("div");
containerMain.setAttribute("id", "container-main");
document.body.appendChild(containerMain);

for (let i=0; i<16; i++){
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "grid-row");
    gridRow.setAttribute("id", "grid-row-" + i);
    containerMain.appendChild(gridRow);

    for (let j=0; j<16; j++){
        const gridCell = document.createElement("div");
        gridCell.setAttribute("class", "grid-element");
        gridCell.setAttribute("id", "grid-element-" + (i * 16 + j));
        gridRow.appendChild(gridCell);

        canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        gridCell.appendChild(canvas);
    }
}

