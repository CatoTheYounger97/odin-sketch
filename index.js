

const gridResolutionButton = document.createElement("button");
gridResolutionButton.innerText = "Canvas Resolution";
gridResolutionButton.setAttribute("id", `gridButton`);
document.querySelector("body").appendChild(gridResolutionButton);

buildGrid(16);

addHoverAction();

setCanvasResolution(gridResolutionButton);

// FUNCTIONS

function setCanvasResolution(button)
{
    button.addEventListener('click', (e) => {
        let canvasResolution = prompt("Set Canvas Resolution (max: 100)");
        if (+canvasResolution > 100) canvasResolution = 100;

        destroyGrid();
        buildGrid(canvasResolution);

        addHoverAction();

    });
}

function addHoverAction()
{
    gridSquareList = document.querySelectorAll(".GridSquare");

    gridSquareList.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "red";
        });
        
    });
}

function createSubDivs(parentDiv, quantity, divClass, divID)
{
    for (let i = 0; i < quantity; ++i) 
    {
        // create element
        const rowDiv = document.createElement("div");
        // add relevant tags
        rowDiv.classList.add(divClass);
        rowDiv.setAttribute("id", `${divID}${i + 1}`);
        // append to parent div
        parentDiv.appendChild(rowDiv);
    }
}

function buildGrid( size ) 
{
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", `gridContainer`);
    document.querySelector("body").appendChild(gridContainer);
    
    createSubDivs(gridContainer, size, "GridRow", "row");

    gridRowsList = document.querySelectorAll(".GridRow");

    for (gridRow of gridRowsList)
    {
        createSubDivs(gridRow, size, "GridSquare", "square");
    }

}

function destroyGrid()
{
    const gridContainer = document.querySelector("#gridContainer");
    document.querySelector("body").removeChild(gridContainer);
}