// create top div

const gridDiv = document.createElement("div");

document.querySelector("body").appendChild(gridDiv);

createSubDivs(gridDiv, 16, "GridRows", "row");

gridRowsList = document.querySelectorAll(".GridRows");

for (gridRow of gridRowsList)
{
    createSubDivs(gridRow, 16, "GridSquare", "square");
}


// for (let i = 0; i < 16; ++i) // create and appened 16 divs to create rows in the 16x16 grid 
// {
//     // create element
//     const rowDiv = document.createElement("div");
//     // add relevant tags
//     rowDiv.classList.add("GridRows");
//     rowDiv.setAttribute("id", `row${i + 1}`);
//     // append to parent div
//     gridDiv.appendChild(rowDiv);

//     for (let j = 0; j < 16; ++j) // create and append 16 sub divs to each row
//     {
//         // create element
//         const squareDiv = document.createElement("div");
//         // add relevant tags
//         squareDiv.classList.add("GridSquare");
//         squareDiv.setAttribute("id", `square(${i + 1},${j + 1})`);
//         // append to parent div
//         rowDiv.appendChild(squareDiv);
//     }
// }


function createSubDivs(parentDiv, quantity, divClass, divID)
{
    for (let i = 0; i < quantity; ++i) // create and appened 16 divs to create rows in the 16x16 grid 
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