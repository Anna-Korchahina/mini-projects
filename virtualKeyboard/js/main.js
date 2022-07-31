function DOMcontentLoaded() {
  const Body = document.querySelector('body');
  Body.innerHTML = `
  <header class="header">
        <div class="wrapper">
            <h1 class="title">Virtual keyboard</h1>
        </div>
    </header>
    <main class="main">
        <div class="wrapper">
            <div class="description">
                <p class="description__operating-system">developed on the windows</p>
                <p class="description__hotkeys">press 'shift+alt' to switch language</p>
            </div>
            <div class="window">
                <label for="window__input"></label>
                <textarea id="window__input" name="textarea"></textarea>
            </div>
            <div class="keyboard">
                <div class="keyboard__link keyboard__level-1">
                    <div class="keyboard__block"><span class="keyboard__elem">\`</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">1</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">2</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">3</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">4</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">5</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">6</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">7</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">8</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">9</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">0</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">-</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">=</span></div>
                    <div class="keyboard__block keyboard__size-1"><span class="keyboard__elem">Backspace</span></div>
                </div>
                <div class="keyboard__link keyboard__level-2">
                    <div class="keyboard__block keyboard__size-1"><span class="keyboard__elem">Tab</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">q</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">w</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">e</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">r</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">t</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">y</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">u</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">i</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">o</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">p</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">[</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">]</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">\\</span></div>
                </div>
                <div class="keyboard__link keyboard__level-3">
                    <div class="keyboard__block keyboard__size-2"><span class="keyboard__elem">Caps Lock</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">a</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">s</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">d</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">f</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">g</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">h</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">j</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">k</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">l</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">;</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">'</span></div>
                    <div class="keyboard__block keyboard__size-2"><span class="keyboard__elem">Enter</span></div> 
                </div>
                <div class="keyboard__link keyboard__level-4">
                    <div class="keyboard__block keyboard__size-3"><span class="keyboard__elem">Shift</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">z</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">x</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">c</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">v</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">b</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">n</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">m</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">,</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">.</span></div>
                    <div class="keyboard__block"><span class="keyboard__elem">/</span></div>
                    <div class="keyboard__block keyboard__size-3"><span class="keyboard__elem">Shift</span></div>
                </div>
                <div class="keyboard__link keyboard__level-5">
                    <div class="keyboard__block keyboard__size-5"><div class="shadow"><span class="keyboard__elem">Ctrl</span></div></div>
                    <div class="keyboard__block keyboard__size-6"><div class="shadow"><span class="keyboard__elem">Fn</span></div></div>
                    <div class="keyboard__block keyboard__size-6"><div class="shadow"><span class="keyboard__elem">win</span></div></div>
                    <div class="keyboard__block keyboard__size-6"><div class="shadow"><span class="keyboard__elem">Alt</span></div></div>
                    <div class="keyboard__block keyboard__size-7"><div class="shadow"><span class="keyboard__elem"></span></div></div>
                    <div class="keyboard__block keyboard__size-6"><span class="keyboard__elem">Alt</span></div>
                    <div class="keyboard__block keyboard__size-6"><span class="keyboard__elem">Ctrl</span></div>
                    <div class="keyboard__block keyboard__size-4"><span class="keyboard__elem">&larr;</span></div>
                    <div class="keyboard__block keyboard__size-4"><span class="keyboard__elem">&uarr;</span></div>
                    <div class="keyboard__block keyboard__size-4"><span class="keyboard__elem">&rarr;</span></div>
                    <div class="keyboard__block keyboard__size-4"><span class="keyboard__elem">&darr;</span></div>  
                </div>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div class="wrapper">
        </div>
    </footer>
  `;
  const Keyboard = document.querySelector('.keyboard');
  function highlightButton(event) {
    console.log(event);
  }

  Keyboard.addEventListener('click', highlightButton);
}

document.addEventListener('DOMContentLoaded', DOMcontentLoaded);
