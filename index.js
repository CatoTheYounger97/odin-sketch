

const gridResolutionButton = document.createElement("button");
gridResolutionButton.innerText = "Canvas Resolution";
gridResolutionButton.setAttribute("id", `gridButton`);
document.querySelector("body").appendChild(gridResolutionButton);

const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", `gridContainer`);
document.querySelector("body").appendChild(gridContainer);


createSubDivs(gridContainer, 16, "GridRow", "row");

gridRowsList = document.querySelectorAll(".GridRow");

for (gridRow of gridRowsList)
{
    createSubDivs(gridRow, 16, "GridSquare", "square");
}

gridSquareList = document.querySelectorAll(".GridSquare");

addHoverAction(gridSquareList);

setCanvasResolution(gridResolutionButton);

// FUNCTIONS

function setCanvasResolution(button)
{
    let canvasResolution = 16;

    button.addEventListener('click', (e) => {
        canvasResolution = prompt("Set Canvas Resolution");

    });
}

function addHoverAction(elementList)
{
    elementList.forEach((element) => {
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