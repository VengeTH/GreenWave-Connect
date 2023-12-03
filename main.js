const left = document.getElementById('left');
const right = document.getElementById('right');
const containersz = document.getElementById('wholediv');
left.addEventListener('click', () => {
    // Move the last div to the beginning to rotate them
    const tempHTML = div1.innerHTML;
    div1.innerHTML = div3.innerHTML;
    div3.innerHTML = div2.innerHTML;
    div2.innerHTML = tempHTML;
});
right.addEventListener('click', () => {
    // Move the first div to the end to rotate them
    const tempHTML = div1.innerHTML;
    div1.innerHTML = div2.innerHTML;
    div2.innerHTML = div3.innerHTML;
    div3.innerHTML = tempHTML;
});