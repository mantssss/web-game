const gravity = 0.5;
class Player extends Tile {
	velocity: Vector2;
	constructor(x:number, y:number, width:number, height:number) {
		// Init tile
		super(x, y, width, height);
		// Init velocity
		this.velocity = { x:0, y:0 };

		// Listen for input events
		canvas.addEventListener('keydown', ({keyCode}:KeyboardEvent) => { this.input_kb(this, keyCode)});
		canvas.addEventListener('click', () => { this.input_touch(this)});
	}

	update() {
		this.position.y += this.velocity.y;

		if (this.position.y + this.height <= canvas.height)
			this.velocity.y += gravity;
		else
		{
			this.position.y = canvas.height - this.height;
			this.velocity.y = 0;
		}
	}

	input_kb(player:Player, keyCode:number) {
		switch (keyCode) {
			case 32:
				player.jump();
				break;
		}
	}
	input_touch(player:Player) {
		player.jump();
	}

	jump() {
		this.velocity.y += -5;
	}
}