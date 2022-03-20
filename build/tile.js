"use strict";
class Tile {
    constructor(x, y, width, height) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
    }
    update() {
    }
    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    toStr() {
        return 'X=' + this.position.x + '; ' +
            'Y=' + this.position.y + '; ' +
            'W=' + this.width + '; ' +
            'H=' + this.height;
    }
}
