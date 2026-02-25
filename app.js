const carData = [
    { make: "Ford", model: "Mustang GT", hp: 460, tq: 420, image: "https://hips.hearstapps.com/hmg-prod/images/2026-mustang-fx-package-21-6843458c131a9.jpg?crop=0.659xw:0.567xh;0.155xw,0.330xh&resize=1200:*" },
    { make: "Chevrolet", model: "Camaro SS", hp: 455, tq: 455, image: "https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg?crop=0.827xw:0.853xh;0.0946xw,0.129xh&resize=1200:*" },
    { make: "Dodge", model: "Challenger", hp: 375, tq: 410, image: "https://hips.hearstapps.com/hmg-prod/images/dg020-105cl-1574257068.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1200:*" },
    { make: "Porsche", model: "911 Carrera", hp: 379, tq: 331, image: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-152-67b4ae78bbc5d.jpg?crop=0.796xw:0.671xh;0.0705xw,0.178xh&resize=1200:*" },
    { make: "Toyota", model: "Supra", hp: 382, tq: 368, image: "https://media.ed.edmunds-media.com/toyota/gr-supra/2024/oem/2024_toyota_gr-supra_coupe_30-premium_fq_oem_1_1600.jpg" },
    { make: "Nissan", model: "Z", hp: 400, tq: 350, image: "https://media.ed.edmunds-media.com/nissan/z/2024/oem/2024_nissan_z_coupe_performance_fq_oem_1_1600.jpg" },
    { make: "BMW", model: "M4", hp: 473, tq: 406, image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m4-convertible-front-three-quarters-motion-2-65b935dab3854.jpg?crop=0.718xw:0.606xh;0.114xw,0.171xh&resize=1200:*" },
    { make: "Audi", model: "RS5", hp: 444, tq: 442, image: "https://media.ed.edmunds-media.com/audi/rs-5/2023/oem/2023_audi_rs-5_coupe_base_fq_oem_1_1600.jpg" },
    { make: "Lexus", model: "RC F", hp: 472, tq: 395, image: "https://hips.hearstapps.com/hmg-prod/images/2025-lexus-rcf-finaledition-001-1500x884-6789462346e36.jpg?crop=0.519xw:0.497xh;0.0689xw,0.375xh&resize=1200:*" },
    { make: "Honda", model: "Civic Type R", hp: 315, tq: 310, image: "https://hips.hearstapps.com/hmg-prod/images/2023-honda-civic-type-r-pr-103-6917579d9cc0e.jpg?crop=0.580xw:0.489xh;0.123xw,0.290xh&resize=1200:*" },
    { make: "Subaru", model: "WRX STI", hp: 310, tq: 290, image: "https://hips.hearstapps.com/hmg-prod/images/2025-subaru-wrx-ts-351-6787e1c414c63.jpg?crop=0.712xw:0.600xh;0.216xw,0.362xh&resize=1200:*" },
    { make: "Volkswagen", model: "Golf R", hp: 315, tq: 295, image: "https://hips.hearstapps.com/hmg-prod/images/2025-volkswagen-golf-r-720-68e3cbc9e2f51.jpg?crop=0.782xw:0.659xh;0.151xw,0.212xh&resize=1200:*" },
    { make: "Mercedes", model: "AMG C63", hp: 469, tq: 479, image: "https://media.ed.edmunds-media.com/mercedes-benz/c-class/2024/oem/2024_mercedes-benz_c-class_sedan_amg-c-63-s-e-performance_fq_oem_1_1600.jpg" },
    { make: "Alfa Romeo", model: "Giulia QV", hp: 505, tq: 443, image: "https://media.ed.edmunds-media.com/alfa-romeo/giulia/2024/oem/2024_alfa-romeo_giulia_sedan_quadrifoglio_fq_oem_1_1600.jpg" },
    { make: "Cadillac", model: "CT4-V Blackwing", hp: 472, tq: 445, image: "https://media.ed.edmunds-media.com/cadillac/ct4/2023/oem/2023_cadillac_ct4_sedan_v-blackwing_fq_oem_1_1600.jpg" }
];

let currentScore = 0;
let carA = null;
let carB = null;

// DOM Elements
const screenIntro = document.getElementById('screen-intro');
const screenGame = document.getElementById('screen-game');
const screenResult = document.getElementById('screen-result');

const scoreEl = document.getElementById('score');

const carACard = document.getElementById('car-a-card');
const carAName = document.getElementById('car-a-name');
const carAHp = document.getElementById('car-a-hp');
const carATq = document.getElementById('car-a-tq');
const carAImage = carACard.querySelector('.car-image');

const carBCard = document.getElementById('car-b-card');
const carBName = document.getElementById('car-b-name');
const carBHp = document.getElementById('car-b-hp');
const carBTq = document.getElementById('car-b-tq');
const carBImage = carBCard.querySelector('.car-image');

const resultTitle = document.getElementById('result-title');
const winnerReveal = document.getElementById('winner-reveal');
const winnerName = document.getElementById('winner-name');
const winnerImage = winnerReveal.querySelector('.car-image-result');
const mathBreakdown = document.getElementById('math-breakdown');

// Buttons
document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-next').addEventListener('click', loadNewRace);

carACard.addEventListener('click', () => handleGuess('A'));
carBCard.addEventListener('click', () => handleGuess('B'));

function switchScreen(screenToShow) {
    screenIntro.classList.remove('active');
    screenIntro.classList.add('hidden');
    screenGame.classList.remove('active');
    screenGame.classList.add('hidden');
    screenResult.classList.remove('active');
    screenResult.classList.add('hidden');

    screenToShow.classList.remove('hidden');
    // small delay to allow display:block to apply before animating opacity
    setTimeout(() => {
        screenToShow.classList.add('active');
    }, 10);
}

function startGame() {
    currentScore = 0;
    updateScore();
    loadNewRace();
    switchScreen(screenGame);
}

function getRandomCar(excludeCar) {
    let availableCars = carData;
    if (excludeCar) {
        availableCars = carData.filter(car => car.model !== excludeCar.model);
    }
    const randomIndex = Math.floor(Math.random() * availableCars.length);
    return availableCars[randomIndex];
}

function updateScore() {
    scoreEl.innerText = currentScore;
}

function loadNewRace() {
    // Reset card classes
    carACard.classList.remove('correct', 'incorrect');
    carBCard.classList.remove('correct', 'incorrect');

    carA = getRandomCar(null);
    carB = getRandomCar(carA);

    // Populate Car A
    carAName.innerText = `${carA.make} ${carA.model}`;
    carAHp.innerText = carA.hp;
    carATq.innerText = carA.tq;
    carAImage.src = carA.image;
    carAImage.alt = `${carA.make} ${carA.model}`;

    // Populate Car B
    carBName.innerText = `${carB.make} ${carB.model}`;
    carBHp.innerText = carB.hp;
    carBTq.innerText = carB.tq;
    carBImage.src = carB.image;
    carBImage.alt = `${carB.make} ${carB.model}`;

    switchScreen(screenGame);
}

function handleGuess(guess) {
    const powerA = carA.hp + carA.tq;
    const powerB = carB.hp + carB.tq;

    let winner = 'tie';
    if (powerA > powerB) winner = 'A';
    if (powerB > powerA) winner = 'B';

    let isCorrect = false;

    if (guess === winner) {
        isCorrect = true;
        currentScore++;
    } else if (winner === 'tie') {
        // give it to them if it's a tie
        isCorrect = true;
        currentScore++;
    } else {
        // wrong guess
        currentScore = 0; // Reset score on wrong guess ? Or maybe just don't increment. Let's just not increment.
    }

    updateScore();

    // Visual feedback
    if (guess === 'A') {
        carACard.classList.add(isCorrect ? 'correct' : 'incorrect');
    } else {
        carBCard.classList.add(isCorrect ? 'correct' : 'incorrect');
    }

    // Delay before showing results
    setTimeout(() => {
        showResult(winner, isCorrect, powerA, powerB);
    }, 1000);
}

function showResult(winner, isCorrect, powerA, powerB) {
    let winningCar = winner === 'A' ? carA : (winner === 'B' ? carB : null);

    if (isCorrect) {
        resultTitle.innerText = "You got it! 🎉";
        resultTitle.style.color = "var(--secondary)";
    } else {
        resultTitle.innerText = "Oops! Not quite. 😅";
        resultTitle.style.color = "var(--primary)";
    }

    if (winner === 'tie') {
        winnerImage.style.display = 'none';
        winnerName.innerText = "It's a Tie!";
    } else {
        winnerImage.style.display = 'inline-block';
        winnerImage.src = winningCar.image;
        winnerImage.alt = `${winningCar.make} ${winningCar.model}`;
        winnerName.innerText = `${winningCar.make} ${winningCar.model} Wins!`;
    }

    mathBreakdown.innerHTML = `
        ${carA.make} ${carA.model}: 
        <br>${carA.hp} (HP) + ${carA.tq} (Torque) = <strong>${powerA} Power</strong>
        <br><br>
        ${carB.make} ${carB.model}: 
        <br>${carB.hp} (HP) + ${carB.tq} (Torque) = <strong>${powerB} Power</strong>
        <br><br>
        <span class="highlight">
            ${powerA > powerB ? `${powerA} is greater than ${powerB}!` :
            (powerB > powerA ? `${powerB} is greater than ${powerA}!` :
                `They are equal: ${powerA} = ${powerB}!`)}
        </span>
    `;

    switchScreen(screenResult);
}
