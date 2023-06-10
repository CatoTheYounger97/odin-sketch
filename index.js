// create top div

const gridDiv = document.createElement("div");

document.querySelector("body").appendChild(gridDiv);

createSubDivs(gridDiv, 50, "GridRow", "row");

gridRowsList = document.querySelectorAll(".GridRow");

for (gridRow of gridRowsList)
{
    createSubDivs(gridRow, 50, "GridSquare", "square");
}

gridSquareList = document.querySelectorAll(".GridSquare");

addHoverAction(gridSquareList);


function addHoverAction(elementList)
{
    elementList.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            console.log(e.target);
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