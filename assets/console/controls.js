document.getElementById('upButton').addEventListener('click', () => {
    if (direction !== 'down') direction = 'up';
});

document.getElementById('downButton').addEventListener('click', () => {
    if (direction !== 'up') direction = 'down';
});

document.getElementById('leftButton').addEventListener('click', () => {
    if (direction !== 'right') direction = 'left';
});

document.getElementById('rightButton').addEventListener('click', () => {
    if (direction !== 'left') direction = 'right';
});