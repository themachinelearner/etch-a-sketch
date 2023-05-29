function setUpNewGrid() {
    const numCellsOnSide = getUserInput();
    clearUserInput();
    if (!numCellsOnSide) {
        return;
    }
    clearGrid();
    populateGrid(numCellsOnSide);
}

function getUserInput() {
    const input = document.querySelector('#sizeInput');
    if (!parseInt(input.value)) {
        return;
    }
    return parseInt(input.value);
}

function clearUserInput() {
    const input = document.querySelector('#sizeInput');
    input.value = '';
}

function clearGrid() {
    // Grid must be two levels deep and live under the gridHolder div
    const gridHolder = document.querySelector('#gridHolder');
    const outerChildren = gridHolder.children;

    Array.from(outerChildren).forEach(outerElement => {
        const innerChildren = outerElement.children;
        Array.from(innerChildren).forEach(innerElement => {
            innerElement.remove();
        });
        outerElement.remove();
    });
}

function populateGrid(numCellsOnSide) {
    const gridHolder = document.querySelector('#gridHolder');
    for (let i = 0; i < numCellsOnSide; i++) {
        const outerItem = document.createElement('div');
        for (let j = 0; j < numCellsOnSide; j++) {
            const innerItem = document.createElement('div');
            innerItem.addEventListener('mouseover', darkenBox);
            outerItem.appendChild(innerItem);
        }
        outerItem.addEventListener('mouseover', darkenBox);
        gridHolder.appendChild(outerItem);
    }
}

function darkenBox(e) {
    e.target.classList.add('darkened');
}

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', setUpNewGrid);