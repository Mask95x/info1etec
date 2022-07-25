current = 1;
function old(element) {
    if (current) {
        element.innerHTML = 'X';
        current = 0;
    } else {
        element.innerHTML = 'O';
        current = 1;
    }

    console.log(current);
}