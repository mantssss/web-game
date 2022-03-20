"use strict";
const canvas = document.querySelector('canvas');
// Resize canvas
window.onresize = scaleCanvasToWindow;
scaleCanvasToWindow();
const ctx = canvas.getContext("2d");
// Create player
const player = new Player(50, 50, 30, 30);
pushUpdate(player);
pushDraw(player);
// Start update loop
update(canvas, ctx);
// Prevent stupid double-tap-to-zoom on *some* mobile devices by discarding taps within 300ms of eachother
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    let now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
