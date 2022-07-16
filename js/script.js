/* Created By Fernando Machado
    My github: https://github.com/fmachadoweb
    */

const animal = document.querySelector('.animal');
const cage = document.querySelector('.cage');


const jump = () => {
    animal.classList.add('jump');

    setTimeout (() => {
        animal.classList.remove('jump');
    }, 500);
}





const loop = setInterval(() => {

    const cagePosition = cage.offsetLeft;
    const animalPosition = +window.getComputedStyle(animal).bottom.replace('px', '');


    if (cagePosition <= 120 && cagePosition > 0 && animalPosition < 200) {

        cage.style.animation ='none';
        cage.style.left = `${cagePosition}px`;

        animal.style.animation ='none';
        animal.style.bottom = `${cagePosition}px`;

        animal.src ='./img/gameover.gif';
        animal.style.width = "280px";
        animal.style.marginLeft = "50px";

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);