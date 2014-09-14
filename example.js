g = new Cortana.Game('stage', 800, 600);

var player = new Cortana.Entity({
	name: 'player',
	pos: {x: 140, y: 65},
	sprite: null,
	
	init: function() {
		this.sprite = new Cortana.Sprite('/images/enemy.png', 256, 256, this.pos.x, this.pos.y);
	},
	
	update: function(dt) {

		if (g.input.pressed.up) {
			this.pos.y -= 1;
		}

		if (g.input.pressed.down) {
			this.pos.y += 1;
		}

		if (g.input.pressed.left) {
			this.pos.x -= 1;
		}

		if (g.input.pressed.right) {
			this.pos.x += 1;
		}

		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

g.add(player);
