function makeGrid() {
    let gridHeight = document.getElementById('inputHeight').value;
    let gridWidth = document.getElementById('inputWidth').value;
    let table = document.getElementById('pixelCanvas');
    let color = document.getElementById('colorPicker').value;

    table.innerHTML = '';

    for(let i=0; i < gridHeight; i++){
        let newRow = table.insertRow(i);
        for(let x=0; x < gridWidth; x++){
            let newCell = newRow.insertCell(x);
            newCell.addEventListener('click', function(e){
                e.target.style.backgroundColor = color;
            })
        }
    }
}

document.getElementById('sizePicker').addEventListener('submit', function(e){
    e.preventDefault();
    makeGrid();
});
