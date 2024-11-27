// buttons
const abductBtn = document.getElementById('abduct-btn');
const cloneBtn = document.getElementById('clone-btn');
const flipBtn = document.getElementById('flip-btn');
const paintBtn = document.getElementById('paint-btn');
const partyBtn = document.getElementById('party-btn');

// cows
const cow = document.getElementById('cow');
const cow01 = document.getElementById('cow01');
const cow02 = document.getElementById('cow02');

// abduct button
abductBtn.addEventListener('click', () => {
    cow.classList.toggle('abducted');

    if (cow.classList.contains('abducted')) {
        abductBtn.textContent = 'Release Mootilda!!!';
    } else {
        abductBtn.textContent = 'Abduct?!';
    }
});

// clone button
let clickCount = 0;

cloneBtn.addEventListener('click', () => {
    clickCount++;

    switch (clickCount) {
        case 1:
            cow01.style.display = 'block';
            setTimeout(() => {
                cow01.style.opacity = '1';
            }, 10);
            cloneBtn.textContent = 'Clone Again!';
            break;
        case 2:
            cow02.style.display = 'block';
            setTimeout(() => {
                cow02.style.opacity = '1';
            }, 10);
            cloneBtn.textContent = 'Enough Mootildas!!!';
            break;
        case 3:
            cow01.style.opacity = '0';
            cow02.style.opacity = '0';
            setTimeout(() => {
                cow01.style.display = 'none';
                cow02.style.display = 'none';
            }, 500);
            cloneBtn.textContent = 'Clone';
            clickCount = 0;
            break;
    }
});

// flip button
flipBtn.addEventListener('click', () => {
    cow.classList.toggle('flipped');

    if (cow.classList.contains('flipped')) {
        flipBtn.textContent = 'Stop Flipping!!!';
    } else {
        flipBtn.textContent = 'Do a Flip';
    }
});


console.log('Hello, World!');