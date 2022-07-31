// план:
// 1. получить список аудиофайлов с остальными свойствами (через массив объектов)
// 2. реализовать аудиоплейер с настройками
// 3. совместить объект с пользовательской настройкой аудиоплеера
// 4. верстка 
'use strict';

import audio from './musicTracks.js';

window.addEventListener('DOMContentLoaded', () => {

    const activeSongSubstrate = document.querySelector('.cover'),
        singer = document.querySelector('.content__singer'),
        track = document.querySelector('.content__track'),
        audioPlayer = document.querySelector('.content__audio'),
        play = document.querySelector('.playPause'),
        cardImg = document.querySelector('.content__img'),
        cardBlock = document.querySelector('.content__block'),
        backward = document.querySelector('.backward'),
        forward = document.querySelector('.forward'),
        progressBar = document.querySelector('.progressBar'),
        currentTime = document.querySelector('.currentTime'),
        durationTime = document.querySelector('.durationTime');

    let isPlay = false,
        index = 0;

    currentTime.innerHTML = '0:00';

    changeSubstrate();

    setOptionsElement(audio[0].src, 'Jane');

    audioPlayer.classList.add('pause');

    setOptionsForCover();

    audioPlayer.addEventListener('loadedmetadata', () => {
        const min = Math.floor(audioPlayer.duration / 60);
        const sec = Math.floor(audioPlayer.duration % 60);
        durationTime.innerHTML = `${min}:${sec}`;
        progressBar.min = 0;
        progressBar.max = audioPlayer.duration;
    });

    backward.addEventListener('click', () => {
        let nextElement;
        const currentElement = audio[index];
        if (currentElement.id === 0) {
            nextElement = audio[audio.length - 1];
            index = nextElement.id;
        } else {
            nextElement = audio[index - 1];
            index = nextElement.id;
        }

        cardImg.src = nextElement.src;

        changeSubstrate(nextElement['background-image']);
        setOptionsForCover(nextElement.audio, nextElement.singer, nextElement.track);

        playAudio();
    });

    forward.addEventListener('click', () => {
        let nextElement;
        const currentElement = audio[index];
        if (currentElement.id === audio.length - 1) {
            nextElement = audio[0];
            index = nextElement.id;
        } else {
            nextElement = audio[index + 1];
            index = nextElement.id;
        }

        cardImg.src = nextElement.src;

        changeSubstrate(nextElement['background-image']);
        setOptionsForCover(nextElement.audio, nextElement.singer, nextElement.track);

        playAudio();
    });

    play.addEventListener('click', () => {
        if (isPlay) {
            pauseAudio();
        } else {
            audioPlayer.src = audio[index].audio;
            playAudio();
        }
    });

    function changeSubstrate(background = audio[0]['background-image']) {
        activeSongSubstrate.style.height = '100%';
        activeSongSubstrate.style.background = background;
        activeSongSubstrate.style.backgroundPosition = 'center';
        activeSongSubstrate.style.backgroundRepeat = 'no-repeat';
        activeSongSubstrate.style.backgroundSize = 'cover';
    }

    function setOptionsForCover(propSrc = audio[0].audio, propSinger = audio[0].singer, propTrack = audio[0].track) {
        audioPlayer.src = propSrc;
        singer.innerHTML = propSinger;
        track.innerHTML = propTrack;
    }

    function setOptionsElement(src, alt) {
        cardImg.src = src;
        cardImg.alt = alt;
        cardImg.style.width = '100%';
    }

    function playAudio() {
        audioPlayer.classList.remove('pause');
        audioPlayer.classList.add('play');
        audioPlayer.currentTime = 0;
        isPlay = true;
        audioPlayer.play();

        // changeProgressBar();
        play.src = '/audioPlayer/svg/pause.png';

        cardImg.classList.remove('pause');
        cardImg.classList.add('play');

        cardBlock.classList.remove('pause');
        cardBlock.classList.add('play');
    }

    function pauseAudio() {
        audioPlayer.classList.remove('play');
        audioPlayer.classList.add('pause');
        isPlay = false;
        audioPlayer.pause();

        play.src = '/audioPlayer/svg/play.png';

        cardImg.classList.remove('play');
        cardImg.classList.add('pause');

        cardBlock.classList.remove('play');
        cardBlock.classList.add('pause');
    }


    function updateTime() {
        currentTime.innerHTML = getTime(audioPlayer.currentTime);
        changeProgresBar();
    }

    function changeProgresBar() {
        progressBar.value = (Math.floor(audioPlayer.currentTime) / (Math.floor(audioPlayer.duration) / 100));
    }

    function getTime(time) {
        const min = time / 60;
        const sec = time % 60;
        return `${addZero(Math.floor(min))}:${addZero(Math.floor(sec))}`;
    }

    function addZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return `${num}`;
        }
    }

    audioPlayer.addEventListener('timeupdate', updateTime);


});