const containerMain = document.createElement("div");
containerMain.setAttribute("id", "container-main");
document.body.appendChild(containerMain);

for (let i=0; i<16; i++){
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "grid-row");
    gridRow.setAttribute("id", "grid-row-" + i);
    containerMain.appendChild(gridRow);
}