class Tile {
	position: Vector2;
	width: number;
	height: number;
	constructor(x:number, y:number, width:number, height:number) {
		this.position = { x, y };
		this.width = width;
		this.height = height;
	}

	update() {
	}

	draw(ctx:CanvasRenderingContext2D) {
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	toStr(): string
	{
		return 'X=' + this.position.x + '; ' +
			   'Y=' + this.position.y + '; ' +
			   'W=' + this.width + '; ' +
			   'H=' + this.height;
	}
}