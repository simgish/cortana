g = new Cortana.Game('stage', 500, 280);

var bg = new Cortana.Entity({
	name: 'bg',
	pos: {x: 0, y: 0},
	sprite: null,

	init: function() {
		this.sprite = new Cortana.Sprite('/images/bg.png', 500, 280, this.pos.x, this.pos.y);
	},

	update: function(dt) {
		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

var player = new Cortana.Entity({
	name: 'player',
	pos: {x: 140, y: 65},
	sprite: null,
	
	init: function() {
		this.sprite = new Cortana.Sprite('/images/enemy.png', 32, 32, this.pos.x, this.pos.y);
	},
	
	update: function(dt) {

		if (g.input.pressed.up) {
			this.pos.y -= 5;
		}

		if (g.input.pressed.down) {
			this.pos.y += 5;
		}

		if (g.input.pressed.left) {
			this.pos.x -= 5;
		}

		if (g.input.pressed.right) {
			this.pos.x += 5;
		}

		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

g.add(bg);
g.add(player);

g.start();
