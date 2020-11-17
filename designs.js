// Create the table
function makeGrid() {
    // Assign variables based off user input
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    const table = document.getElementById('pixelCanvas');

    // Clear table each time this function is run
    table.innerHTML = '';

    // Loop through input, creating rows, cells, and adding the event listener to change color for each cell
    for(let i=0; i < gridHeight; i++){
        const newRow = table.insertRow(i);
        for(let x=0; x < gridWidth; x++){
            const newCell = newRow.insertCell(x);
            newCell.addEventListener('click', function(e){
                e.target.style.backgroundColor = document.getElementById('colorPicker').value;
            })
        }
    }
}

// Add event listener to the submit button to run the makeGrid function
document.getElementById('sizePicker').addEventListener('submit', function(e){
    e.preventDefault();
    makeGrid();
});
