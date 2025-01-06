'use strict';
const butNew = document.querySelector('.btn--new');
const butRoll = document.querySelector('.btn--roll');
const butHold = document.querySelector('.btn--hold');
// document.querySelector('.btn--new');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score1.textContent = 0;
score0.textContent = 0;
dice.classList.add('hidden');

let current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const scores = [0, 0];

butRoll.addEventListener('click', function () {
  if (playing) {
    let number = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${number}.png`;

    if (number !== 1) {
      currentScore = currentScore + number;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;

      if (activePlayer === 0) {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        activePlayer = 1;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--active');
      } else {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        activePlayer = 0;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--active');
      }
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] < 100) {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;

    if (activePlayer === 0) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      activePlayer = 1;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      activePlayer = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    }
  } else {
    playing = false;

    dice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  dice.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  document.querySelector(`.player--1`).classList.remove('player--active');
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
});
