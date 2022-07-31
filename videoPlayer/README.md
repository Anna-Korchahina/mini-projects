# MiniProjectsMedia
Audio player &amp;&amp; video player

Создание плеера для сайта на HTML5 и JavaScript. Теория + алгоритм

Чтобы создать плеер, достаточно такого кода для видео:
<video src="video.mp4" poster="poster.jpg" controls></video>

Атрибут controls используется для того, чтобы отобразить элементы управления. Если его не указать, никакого интерфейса не будет: аудиоплеер не будет отображаться, а в видеоплеере просто будет показан кадр из видео или постер.

Для видео достаточно прописать атрибут src для указания источника.

Также внутри плеера можно прописать какой-нибудь текст — его увидят те, у кого не поддерживается HTML5. Правилом хорошего тона считается указание ссылки на скачивание современного браузера.

Список атрибутов, которые можно указать для плеера:

controls — панель управления;
autoplay — автовоспроизведение;
loop — цикличность;
muted — выключение звука;
poster — обложка видео. Если не указать, будет выбран случайный кадр;
preload — предварительная загрузка. Существует 3 значения: auto (полностью), metadata (небольшую часть, чтобы определить основные метаданные) и none (без загрузки);
src — ссылка на файл.
Также можно указать высоту и ширину.

Существует элемент <track>, который размещается внутри плеера, — в нем указывается путь к текстовым файлам: субтитрам или метаданным. Для них прописываются следующие атрибуты:

default — указывает на дорожку, которая используется по умолчанию;
kind — тип файла, можно указать следующие значения:
subtitles — субтитры (стоит по умолчанию),
captions — субтитры для глухонемых,
chapters — название глав и их временные рамки,
descriptions — звуковое описание происходящего для слепых,
metadata — метаданные;
label — название дорожки;
src — путь к файлу;
srclang — язык дорожки.

JS события медиа элемента audio и video:
https://andew.ru/pages/page/html5-audio-video-js-mediaevents.php

Встроенный функционал не поддерживает:
можно убрать звук, но нельзя регулировать громкость;
нельзя менять скорость воспроизведения;
нельзя поставить на повтор и так далее.


Плеер на JS работает, как и любой другой интерфейс: пользователь нажимает на кнопки, скрипт отлавливает эти события и вызывает необходимые функции.

Шаг 1. 
Создать интерфейс, прописать все ползунки и кнопки, и задать стили

<div class='video-container'>
    <video src="video.mp4" poster='preview.jpg' class='video-player' id='video-player' preload='metadata'></video>
    <div class='video-hud'>
        <div class='video-hud__element video-hud__action video-hud__action_play' id='video-hud__action'></div>
        <div class='video-hud__element video-hud__curr-time' id='video-hud__curr-time'>00:00</div>
        <progress value='0' max='100' class='video-hud__element video-hud__progress-bar'
            id='video-hud__progress-bar'></progress>
        <div class='video-hud__element video-hud__duration' id='video-hud__duration'>00:00</div>
        <div class='video-hud__element video-hud__mute video-hud__mute_false' id='video-hud__mute'></div>
        <input type='range' value='100' max='100' title='Громкость' class='video-hud__element video-hud__volume'
            id='video-hud__volume'>
        <select title='Скорость' class='video-hud__element video-hud__speed' id='video-hud__speed'>
            <option value='25'>x0.25</option>
            <option value='50'>x0.50</option>
            <option value='75'>x0.75</option>
            <option value='100' selected>x1.00</option>
            <option value='125'>x1.25</option>
            <option value='150'>x1.50</option>
            <option value='175'>x1.75</option>
            <option value='200'>x2.00</option>
        </select>
        <a class='video-hud__element video-hud__download' title='Скачать' href='video.mp4' download></a>
    </div>
</div>

.video-container {
background:#000;
width:80%;
color:#fff;
}
.video-player {
width:100%;
margin:0;
}
.video-hud {
margin:0;
padding:1px;
}
.video-hud__element {
cursor:pointer;
display:inline-block;
vertical-align:middle;
height:30px;
}
.video-hud__action {
width:30px;
}
.video-hud__action_play {
background:#ccc;
border-radius:0 100px 100px 0;
}
.video-hud__action_pause {
background:#c00;
}
.video-hud__mute {
width:30px;
border-radius:100px 100px 100px 100px;
}
.video-hud__mute_true {
background:#c00;
}
.video-hud__mute_false {
background:#ccc;
}
.video-hud__download {
background:#ccc;
width:30px;
border-radius:0 0 100px 100px;
}

Переходим к JS.

Шаг 2. 
Получить все объекты и кнопки управления

Шаг 3.
Вводим дополнительные переменные:
- переменная paused объекта videoPlayer (плеер) - проверка стоит видео на паузе или нет
- длительность ролика

Шаг 4.
Создавать функции, которые будут отдавать команды плееру:
1) функция запуска/остановки на паузу

Шаг 5.
Создаем перехватчики событий нажатий на кнопки/ролик/доп.реквизиты:
- для запуска/паузы
-


Java Script управление HTML5 video и audio
http://webdiz.com.ua/glava12-html5-api-java-script-upravlenie-html5-video-i-audio/
https://andew.ru/pages/page/html5-audio-video-js-mediaevents.php