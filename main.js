function setUpNewGrid() {
    const input = document.querySelector('#sizeInput');
    if (!parseInt(input.value)) {
        return;
    }

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

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', setUpNewGrid);