let celInput  = document.querySelector('.celInput')
let farInput  = document.querySelector('.farInput')
let conButton = document.querySelector('.conButton')

conButton.addEventListener('click', () => {
    if (celInput.value !== '') {
        farInput.value = (celInput.value * 1.8 + 32).toFixed(2);
    } else if (farInput.value !== '') {
        celInput.value = ((farInput.value - 32) * 5 / 9).toFixed(2);
    } else {
        alert('Input is empty!');
    }
});



    