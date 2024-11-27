const abductBtn = document.getElementById('abduct-btn');
const cloneBtn = document.getElementById('clone-btn');
const flipBtn = document.getElementById('flip-btn');
const paintBtn = document.getElementById('paint-btn');
const partyBtn = document.getElementById('party-btn');
const cow = document.getElementById('cow');

abductBtn.addEventListener('click', () => {
    cow.classList.toggle('abducted');

    if (cow.classList.contains('abducted')) {
        abductBtn.textContent = 'Release Mootilda!!!';
    } else {
        abductBtn.textContent = 'Abduct?!';
    }
});

flipBtn.addEventListener('click', () => {
    cow.classList.toggle('flipped');

    if (cow.classList.contains('flipped')) {
        flipBtn.textContent = 'Stop Flipping!!!';
    } else {
        flipBtn.textContent = 'Do a Flip';
    }
});

console.log('Hello, World!');