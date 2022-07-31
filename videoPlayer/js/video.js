'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // создаем доп.параметры
    let isPlay = false;

    //Получаем объекты 
    const controls = document.querySelector('.controls'), //Элементы управления
        videoPlayer = document.querySelector('.custom-video'), //Плеер
        currentTime = controls.querySelector('.controls__video-curr-time'), //Время
        durationTime = controls.querySelector('.controls__video-duration'), //Время
        progresBar = controls.querySelector('.controls__progress-bar'), //Время
        playPause = controls.querySelector('.playPause'), //Кнопки
        volume = controls.querySelector('.controls__volume'), //Кнопки
        volumeImg = controls.querySelector('.controls__volume-img'); //Кнопки

    volume.value = videoPlayer.volume * 100;

    // обработчик события
    playPause.addEventListener('click', playVideo);
    videoPlayer.addEventListener('click', playVideo);
    videoPlayer.addEventListener('durationchange', changeDuration);
    videoPlayer.addEventListener('timeupdate', updateTime);
    volumeImg.addEventListener('click', changeMuted);
    volume.addEventListener('click', changeVolue);
    volume.addEventListener('input', changeVolue);
    // progresBar.addEventListener('input', consolE);
    // progresBar.addEventListener('click', consolE);
    videoPlayer.addEventListener('ended', endPlay);

    // canplaythrough: это событие срабатывает после загрузки страницы, если браузер определит, 
    // что он может воспроизводить это видео/аудио




    //  функция добавления лидирующего нуля 
    function addZero(num) {
        return (num < 10) ? `0${num}` : `${num}`;
    }
    //  функция обновления текущего времени видео
    function updateTime() {
        currentTime.innerHTML = getTime(videoPlayer.currentTime);
        changeProgresBar();
    }
    //  функция обновления прогресс-бара
    function changeProgresBar() {
        progresBar.value = (Math.floor(videoPlayer.currentTime) / (Math.floor(videoPlayer.duration) / 100));
    }
    //  функция изменения уровня звука
    function changeMuted() {
        (videoPlayer.muted) ? setMute(false, '/videoPlayer/img/svg/volume.svg', 100): setMute(true, '/videoPlayer/img/svg/mute.svg', 0);
    }
    //  функция установки mute-mode уровня звука
    function setMute(isMuted, src, value) {
        videoPlayer.muted = isMuted;
        volumeImg.src = src;
        if (value !== 'current') {
            volume.value = value;
        }
    }
    //  функция изменения уровня звука
    function changeVolue() {
        if (volume.value > 0) {
            setMute(false, '/videoPlayer/img/svg/volume.svg', 'current');
        }
        if (volume.value == 0) {
            setMute(true, '/videoPlayer/img/svg/mute.svg', 'current');
        }
        videoPlayer.volume = volume.value / 100;
    }
    //  функция заполнения продолжительности видео
    function changeDuration() {
        durationTime.innerHTML = getTime(videoPlayer.duration);
    }
    //  функция определения длительности видео в формате ч:мин:сек
    function getTime(time) {
        const hour = Math.floor(time / 3600);
        if (hour < 1) {
            const min = time / 60;
            const sec = time % 60;
            return `${addZero(Math.floor(min))}:${addZero(Math.floor(sec))}`;
        } else {
            const min = (time - hour * 3600) / 60;
            const sec = time % 60;
            return `${addZero(Math.floor(hour))}:${addZero(Math.floor(min))}:${addZero(Math.floor(sec))}`;
        }
    }
    //  функция определяющая завершения видео
    function endPlay() {
        pause();
    }
    //  функция проигрывания видео
    function playVideo() {
        if (progresBar.max != videoPlayer.duration) {
            progresBar.max = videoPlayer.duration;
        }

        // добавить вывод и расчет часов
        if (durationTime.innerHTML === '00:00') {
            changeDuration();
        }

        if (isPlay) {
            pause();
        } else {
            play();
        }
    }

    function play() {
        isPlay = true;
        videoPlayer.classList.add('playV');
        videoPlayer.classList.remove('pauseV');
        videoPlayer.play();

        playPause.classList.add('playV');
        playPause.classList.remove('pauseV');
        playPause.src = '/videoPlayer/img/svg/pause.svg';
    }

    function pause() {
        isPlay = false;
        videoPlayer.classList.add('pauseV');
        videoPlayer.classList.remove('playV');
        videoPlayer.pause();

        playPause.classList.add('pauseV');
        playPause.classList.remove('playV');
        playPause.src = '/videoPlayer/img/svg/play.svg';
    }

    function consolE() {
        // videoPlayer.currentTime = progresBar.value;
    }


});