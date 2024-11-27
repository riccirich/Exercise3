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
let isAbducted = false;
abductBtn.addEventListener('click', () => {
    isAbducted = !isAbducted;

    cow.classList.toggle('abducted');
    cow01.classList.toggle('abducted');
    cow02.classList.toggle('abducted');

    if (isAbducted) {
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
let isFlipped = false;
flipBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;

    cow.classList.toggle('flipped');
    cow01.classList.toggle('flipped');
    cow02.classList.toggle('flipped');

    if (isFlipped) {
        flipBtn.textContent = 'Stop Flipping!!!';
    } else {
        flipBtn.textContent = 'Do a Flip';
    }
});

// paint button
let isPainted = false;

paintBtn.addEventListener('click', () => {
    isPainted = !isPainted;
    
    cow.classList.toggle('painted');
    cow01.classList.toggle('painted');
    cow02.classList.toggle('painted');

    if (isPainted) {
        paintBtn.textContent = 'Unpaint Mootilda!!!';
    } else {
        paintBtn.textContent = 'Paint';
    }
});

// party button
let isPartying = false;

partyBtn.addEventListener('click', () => {
    isPartying = !isPartying;
    cow.classList.toggle('party');

    cow01.classList.toggle('party');
    cow02.classList.toggle('party');

    if (isPartying) {
        partyBtn.textContent = 'Stop Party';
    } else {
        partyBtn.textContent = 'Party';
    }
});
console.log('Hello, World!');