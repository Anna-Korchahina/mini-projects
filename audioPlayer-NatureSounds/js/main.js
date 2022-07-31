'use strict';
import audio from './audio.js';

window.addEventListener('DOMContentLoaded', () => {

    const content = document.querySelector('main > .content'),
          par = document.querySelector('.header__list');

    changePropertyCSS(content, 'backgroundImage', `url(${audio[0]['background-image']})`);

    audio.forEach(item => {
        const elem = createMenuElement(item);
        par.append(elem);

        elem.addEventListener('click', (event) => {
            event.preventDefault();
            const ev = event.target,
                  activeAudio = document.querySelectorAll('a[class="active"] + audio');

            if (activeAudio.length > 0) {
                activeAudio.forEach(elem => {
                    if (elem.previousElementSibling !== ev) {
                        changeClass(elem.previousElementSibling, 'active', 'not-active');
                        pauseAudio(elem);
                    }
                });
            }

            if (ev.classList.contains('active')) {
                changeClass(ev, 'active', 'not-active');
                pauseAudio(document.querySelector(`audio[src*="${item.audio}"] `));
            } else if (ev.classList.contains('not-active')) {
                changeClass(ev, 'not-active', 'active');
                playAudio(item);
                changePropertyCSS(content, 'backgroundImage', `url(${item['background-image']})`);
            }

        });
    });


    function createMenuElement(item) {
        const elem = document.createElement('li');
        elem.classList.add('header__item');
        elem.innerHTML = `
            <li class="header__item">
                <a class="not-active" href="">${item.name}</a>
                <audio src=${item.audio} preload="auto"></audio>
            </li>
        `;
        return elem;
    }

    function playAudio(item) {
        const rt = document.querySelector(`audio[src*="${item.audio}"] `);
        rt.currentTime = 0;
        rt.play();
    }

    function pauseAudio(item) {
        item.pause();
    }

    function changeClass(elem, elemRemove, elemAdd) {
        elem.classList.remove(elemRemove);
        elem.classList.add(elemAdd);
    }

    function changePropertyCSS(elem, propName, propNew){
        elem.style[propName] = propNew;
    }

});