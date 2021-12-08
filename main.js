'use strict';

{
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const shuffle = document.getElementById('shuffle');
  const start = document.getElementById('start');
  const box = document.getElementById('box');
  const correct = document.getElementById('correct');
  const replay = document.getElementById('replay');

  let num = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13];

  start.addEventListener('click', () => {
    start.classList.add('hidden');
    [shuffle, box].forEach(el => {
      el.classList.remove('hidden');
    })
  })
  shuffle.addEventListener('click', () => {
     let number = Math.floor(Math.random() * num.length);
     box1.textContent = num[number];
     let number2 = Math.floor(Math.random() * num.length);
     box2.textContent = num[number2];

     if (number == number2) {
      correct.classList.remove('hidden');
      replay.classList.remove('hidden');
     }
  })
  replay.addEventListener('click', () => {

  })
  window.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.cherry-blossom-container');


  const createPetal = () => {
    const petalEl = document.createElement('span');
    petalEl.className = 'petal';
    const minSize = 10;
    const maxSize = 15;
    const size = Math.random() * (maxSize + 1  - minSize) + minSize;
    petalEl.style.width = `${size}px`;
    petalEl.style.height = `${size}px`;
    petalEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(petalEl);

    setTimeout(() => {
      petalEl.remove();
    }, 10000);

  }
  setInterval(createPetal, 300);

  });

}