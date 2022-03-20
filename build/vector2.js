"use strict";
function v2Addv2(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
}
function v2Subv2(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function v2Mulnum(a, b) {
    return { x: a.x * b, y: a.y * b };
}
function v2Len(v2) {
    return Math.sqrt(Math.pow(v2.x, 2) + Math.pow(v2.y, 2));
}
function v2Normalised(v2) {
    let len = v2Len(v2);
    return { x: v2.x / len, y: v2.y / len };
}
