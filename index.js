
createPageButtons();

const defaultGridSize = 16;
buildGrid(defaultGridSize);

setHoverAction(hoverEventDefault);

setButtonActions();

// FUNCTIONS

function setButtonActions()
{
    let activeAction = hoverEventDefault;

    let canvasResolution = 16;
    let button = document.querySelector("#gridButton");
    button.addEventListener('click', (e) => {
        canvasResolution = prompt("Set Canvas Resolution (max: 100)");
        if (+canvasResolution > 100) canvasResolution = 100;

        destroyGrid();
        buildGrid(canvasResolution);

        setHoverAction(activeAction);

    });

    button = document.querySelector("#defaultButton");
    button.addEventListener('click', () => {
        removeHoverAction(activeAction);
        setHoverAction(hoverEventDefault);
        activeAction = hoverEventDefault;
    });

    button = document.querySelector("#rgbButton");
    button.addEventListener('click', () => {
        removeHoverAction(activeAction);
        setHoverAction(hoverEventRGB);
        activeAction = hoverEventRGB;
    });

    button = document.querySelector("#shadeButton");
    button.addEventListener('click', () => {
        removeHoverAction(activeAction);
        setHoverAction(hoverEventShading);
        activeAction = hoverEventShading;
    });

    button = document.querySelector("#clearButton");
    button.addEventListener('click', () => {
        destroyGrid();
        buildGrid(canvasResolution);

        setHoverAction(activeAction);
    });

}

function setHoverAction(action)
{
    gridSquareList = document.querySelectorAll(".GridSquare");

    gridSquareList.forEach((element) => {
        element.addEventListener('mouseover', action );
    });
}

function removeHoverAction(action)
{
    gridSquareList = document.querySelectorAll(".GridSquare");

    gridSquareList.forEach((element) => {
        element.removeEventListener('mouseover', action);
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

function createPageButtons() 
{
    const gridResolutionButton = document.createElement("button");
    gridResolutionButton.innerText = "Canvas Resolution";
    gridResolutionButton.setAttribute("id", `gridButton`);
    document.querySelector("body").appendChild(gridResolutionButton);

    const defaultButton = document.createElement("button");
    defaultButton.innerText = "Default Red";
    defaultButton.setAttribute("id", `defaultButton`);
    document.querySelector("body").appendChild(defaultButton);

    const switchToRGB = document.createElement("button");
    switchToRGB.innerText = "Random RGB";
    switchToRGB.setAttribute("id", `rgbButton`);
    document.querySelector("body").appendChild(switchToRGB);

    const switchToShade = document.createElement("button");
    switchToShade.innerText = "Shading";
    switchToShade.setAttribute("id", `shadeButton`);
    document.querySelector("body").appendChild(switchToShade);

    const clearCanvas = document.createElement("button");
    clearCanvas.innerText = "Clear";
    clearCanvas.setAttribute("id", `clearButton`);
    document.querySelector("body").appendChild(clearCanvas);

}

function hoverEventRGB(e) 
{
    e.target.style.backgroundColor = `rgb(
        ${getRandom255()},
        ${getRandom255()},
        ${getRandom255()}
        )`;
}

function hoverEventShading(e)
{
    e.target.style.backgroundColor = "yellow";
}

function hoverEventDefault(e)
{
    e.target.style.backgroundColor = "red";
}

function getRandom255()
{
    return Math.random() * 255;
}