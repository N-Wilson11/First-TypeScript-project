export function colorChanger(element: HTMLElement) {
    let changed = false;

    // Add event listener for the color change
    element.addEventListener('click', () => {
        if (changed) {
            element.style.backgroundColor = ''; // When 'changed' is true, make the button blue
        } else {
            element.style.backgroundColor = 'red';  // When 'changed' is false, make the button red
        }
        changed = !changed; // Toggle the state of 'changed'
    });
}

export function greenChanger(element: HTMLElement) {
    let changed = false;
    element.addEventListener('click', () => {
        if (changed) {
            element.style.backgroundColor = ''; // When 'changed' is true, make the button blue
        } else {
            element.style.backgroundColor = 'limegreen';  // When 'changed' is false, make the button red
        }
        changed = !changed; // Toggle the state of 'changed'
    });
}
