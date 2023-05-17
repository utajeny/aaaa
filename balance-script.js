// ==UserScript==
// @name         Balanc surovin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Commercial
// @match        https://sk79.divoke-kmene.sk/game.php?village=15173&screen=overview
// @icon         https://www.google.com/s2/favicons?sz=64&domain=divoke-kmene.sk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
// Kliknutie na prvý odkaz
var link = document.querySelector('a.quickbar_link[data-title="Balance"]');
if (link) {
    link.click();
}

// Čakanie 2 sekundy
setTimeout(function() {
    (function() {
        'use strict';

        // Funkcia na kliknutie na tlačidlo
        function clickButton() {
            var button = document.getElementById("building"); // Nájde tlačidlo podľa ID
            if (button != null) { // Ak tlačidlo existuje
                button.click(); // Klikne na tlačidlo
            }
        }

        // Spustenie klikania každých 200ms
        setInterval(clickButton, 200);
    })();
}, 2000);
