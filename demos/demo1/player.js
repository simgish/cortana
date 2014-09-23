var player = new Cortana.Entity({
	name: 'player',
	pos: {x: 140, y: 65},
    zIndex: 9999, 
	sprite: null,
	canCollide: true,
	collisionCheck: 'coin',
	
	init: function() {
		this.sprite = new Cortana.Sprite('../images/ship.png', 32, 32, this.pos.x, this.pos.y, this.zindex);
	},
	
	update: function(dt) {

		if (game.input.pressed.up && this.pos.y > 0) {
			this.pos.y -= 5;
		}

		if (game.input.pressed.down && (this.pos.y + this.sprite.height) < Cortana.height) {
			this.pos.y += 5;
		}

		if (game.input.pressed.left && this.pos.x > 0) {
			this.pos.x -= 5;
		}

		if (game.input.pressed.right && (this.pos.x + this.sprite.width) < Cortana.width) {
			this.pos.x += 5;
		}

		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

game.add(player);