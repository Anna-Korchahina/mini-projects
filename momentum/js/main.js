'use strict';

import backgroundImage from './backgroundImage.js';
import tracklist from './playList.js';
console.log(tracklist);

document.addEventListener('DOMContentLoaded', () => {

    const timeOfDay = [{
        index: 0,
        // text: 'Доброе утро',
        lang: {
            ru: 'Доброе утро',
            eng: 'Good morning'
        },
    }, {
        index: 1,
        // text: 'Добрый день',
        lang: {
            ru: 'Добрый день',
            eng: 'Good afternoon'
        },
    }, {
        index: 2,
        // text: 'Добрый вечер',
        lang: {
            ru: 'Добрый вечер',
            eng: 'Good evening'
        },
    }, {
        index: 3,
        // text: ,
        lang: {
            ru: 'Доброй ночи',
            eng: 'Good night'
        },
    }];

    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };

    const audio = new Audio();
    let isPlay = false;

    let currentImageIndex = getRandomNum(1, 20);
    let currentSong = 0;

    const wrapper = document.querySelector('.wrapper'),
        sliderIconsNext = document.querySelector('.slide-next'),
        sliderIconsPrev = document.querySelector('.slide-prev');

    const quoteText = document.querySelector('.quote__text'),
        quoteAuthor = document.querySelector('.quote__author'),
        quoteReload = document.querySelector('.quote-icon');

    const curentData = document.querySelector('.curent__data'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

    const contentGreeting = document.querySelector('.content__greeting'),
        contentInput = document.querySelector('.content__input');

    const music = document.querySelector('.music'),
        playlist = music.querySelector('.playlist'),
        audioPlayPrev = music.querySelector('.audio__play-prev'),
        audioPlayPause = music.querySelector('.audio__play-pause'),
        audioPlayNext = music.querySelector('.audio__play-next'),
        audioVolume = music.querySelector('.audio__volume');
        // progress = music.querySelector(".progress");

    tracklist.forEach((song, index) => {
        playlist.append(createElement('li', 'playlist__song', index, song));
    });



    showTime();

    async function getResource() {
        const url = './json/quotes.json';
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Coudn't fetch ${url}, status: ${res.status}`);
        }

        const result = await res.json();
        let index = getRandomNum(0, (result.length - 1));
        quoteText.innerHTML = result[index].text;
        quoteAuthor.innerHTML = result[index].author;
    }
    getResource();


    // текущая дата
    // const date = new Date();
    const timesOfDay = new Date().getHours();
    let timesOfDayIndex = getTimesOfDayIndex();

    wrapper.style.backgroundImage = `url(${backgroundImage[timesOfDayIndex][currentImageIndex].url})`;

    showGreeting();

    const currentDate = new Date().toLocaleDateString('ru-Ru', options);
    curentData.innerHTML = currentDate;



    sliderIconsNext.addEventListener('click', changeBackgroundNext);
    sliderIconsPrev.addEventListener('click', changeBackgroundPrev);
    quoteReload.addEventListener('click', getResource);
    window.addEventListener('beforeunload', setlocalStorage);
    window.addEventListener('load', getLocalStorage);
    music.addEventListener('click', checkTrack);
    audioVolume.addEventListener('input', changeAudioVolume);
    audioVolume.addEventListener('change', changeAudioVolume);

    function showGreeting() {
        const {
            lang
        } = timeOfDay[getTimesOfDayIndex()];
        contentGreeting.innerHTML = `${lang.ru},`;
    }

    function showTime() {
        const date = new Date();
        hours.innerHTML = addZero(date.getHours());
        minutes.innerHTML = addZero(date.getMinutes());
        seconds.innerHTML = addZero(date.getSeconds());
        setTimeout(showTime, 1000);
    }

    function addZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getRandomNum(min, max) {
        // min = Math.ceil(min);
        // max = Math.floor(max);
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }

    function getTimesOfDayIndex() {
        if (timesOfDay >= 6 && timesOfDay < 12) {
            return 0;
        } else if (timesOfDay >= 12 && timesOfDay < 18) {
            return 1;
        } else if (timesOfDay >= 18 && timesOfDay <= 23) {
            return 2;
        } else {
            return 3;
        }
    }

    function changeBackgroundNext() {
        if (currentImageIndex === 20) {
            currentImageIndex = 1;
            wrapper.style.backgroundImage = `url(${backgroundImage[timesOfDayIndex][currentImageIndex].url})`;
        } else {
            currentImageIndex += 1;
            wrapper.style.backgroundImage = `url(${backgroundImage[timesOfDayIndex][currentImageIndex].url})`;
        }
    }

    function changeBackgroundPrev() {
        if (currentImageIndex === 1) {
            currentImageIndex = 20;
            wrapper.style.backgroundImage = `url(${backgroundImage[timesOfDayIndex][currentImageIndex].url})`;
        } else {
            currentImageIndex -= 1;
            wrapper.style.backgroundImage = `url(${backgroundImage[timesOfDayIndex][currentImageIndex].url})`;
        }
    }

    function setlocalStorage() {
        localStorage.setItem('name', contentInput.value);
        console.log(contentInput.value);
    }

    function getLocalStorage() {
        if (localStorage.getItem('name')) {
            contentInput.value = localStorage.getItem('name');
        }
    }

    function createElement(teg, className, i, item) {
        const elem = document.createElement(teg);
        elem.classList.add(className);
        elem.textContent = item.title;
        elem.setAttribute('alt', item.title);
        elem.setAttribute('data-index', `num${i}`);
        return elem;
    }

    function checkTrack(event) {
        if (event.target.classList.contains('audio__play-prev')) {
            playPrevSong();
        } else if (event.target.classList.contains('audio__play-pause')) {
            (isPlay) ? stopPlayAudio() : playAudio();
        } else if (event.target.classList.contains('audio__play-next')) {
            playNextSong();
        } else if (event.target.classList.contains('playlist__song')) {
            return;
        }
    }

    function playNextSong() {
        isPlay = true;
        playlist.querySelector(`[data-index=num${currentSong}]`).classList.remove('song_active');
        (currentSong === tracklist.length - 1) ? currentSong = 0: currentSong += 1;
        playAudio();
    }

    function playPrevSong() {
        isPlay = true;
        playlist.querySelector(`[data-index=num${currentSong}]`).classList.remove('song_active');
        (currentSong === 0) ? currentSong = tracklist.length - 1: currentSong -= 1;
        playAudio();
    }

    function playAudio() {
        isPlay = true;
        playlist.querySelector(`[data-index=num${currentSong}]`).classList.add('song_active');
        audioPlayPause.classList.add('play');

        audio.src = tracklist[currentSong].src;
        audio.currentTime = tracklist[currentSong].duration;
        audio.play();
    }

    function stopPlayAudio() {
        audioPlayPause.classList.remove('play');

        audio.pause();
        isPlay = false;
    }

    function changeAudioVolume(event){
        audio.volume = event.target.value;
    }

});