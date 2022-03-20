"use strict";
let drawQueue = [];
let updateQueue = [];
function pushUpdate(tile) {
    if (updateQueue.includes(null)) {
        updateQueue[updateQueue.indexOf(null)] = tile;
    }
    else {
        updateQueue.push(tile);
    }
}
function popUpdate(tile) {
    if (updateQueue.includes(tile)) {
        updateQueue[updateQueue.indexOf(tile)] = null;
    }
}
function update(canvas, ctx) {
    var _a;
    requestAnimationFrame(() => { update(canvas, ctx); });
    for (let i = 0; i < updateQueue.length; i++) {
        (_a = updateQueue[i]) === null || _a === void 0 ? void 0 : _a.update();
    }
    draw(canvas, ctx);
}
function pushDraw(tile) {
    if (drawQueue.includes(null)) {
        drawQueue[drawQueue.indexOf(null)] = tile;
    }
    else {
        drawQueue.push(tile);
    }
}
function popDraw(tile) {
    if (drawQueue.includes(tile)) {
        drawQueue[drawQueue.indexOf(tile)] = null;
    }
}
function draw(canvas, ctx) {
    var _a;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drawQueue.length; i++) {
        if (drawQueue[i] != null) {
            (_a = drawQueue[i]) === null || _a === void 0 ? void 0 : _a.draw(ctx);
        }
    }
}
function scaleCanvasToWindow() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
