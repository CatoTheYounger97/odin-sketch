
createPageButtons();
// const gridResolutionButton = document.createElement("button");
// gridResolutionButton.innerText = "Canvas Resolution";
// gridResolutionButton.setAttribute("id", `gridButton`);
// document.querySelector("body").appendChild(gridResolutionButton);

const defaultGridSize = 16;
buildGrid(defaultGridSize);

setHoverAction(hoeverEventDefault);

setCanvasResolution();

// FUNCTIONS

function hoverEventRGB(event) 
{
    event.target.style.backgroundColor = "rgb(0,0,0)";
}

function hoverEventShading(event)
{
    event.target.style.backgroundColor = "yellow";
}

function hoeverEventDefault(event)
{
    event.target.style.backgroundColor = "red";
}

function setCanvasResolution()
{
    button = document.querySelector("#gridButton");
    button.addEventListener('click', (e) => {
        let canvasResolution = prompt("Set Canvas Resolution (max: 100)");
        if (+canvasResolution > 100) canvasResolution = 100;

        destroyGrid();
        buildGrid(canvasResolution);

        setHoverAction(hoeverEventDefault);

    });
}

function setHoverAction(action)
{
    gridSquareList = document.querySelectorAll(".GridSquare");

    gridSquareList.forEach((element) => {
        element.addEventListener('mouseover', action );
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

    const switchToRGB = document.createElement("button");
    switchToRGB.innerText = "Random RGB";
    switchToRGB.setAttribute("id", `rgbButton`);
    document.querySelector("body").appendChild(switchToRGB);

    const switchToShade = document.createElement("button");
    switchToShade.innerText = "Shading";
    switchToShade.setAttribute("id", `shadeButton`);
    document.querySelector("body").appendChild(switchToShade);

}