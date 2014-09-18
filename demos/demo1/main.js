g = new Cortana.Game('stage', 500, 281);

var bg = new Cortana.Entity({
	name: 'bg',
	pos: {x: 0, y: 0},
	sprite: null,

	init: function() {
		this.sprite = new Cortana.Sprite('../images/bg.png', 500, 281, this.pos.x, this.pos.y);
	},

	update: function(dt) {
		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

var coin = new Cortana.Entity({
	name: 'coin',
	pos: {x: 0, y: 0},
	sprite: null,

	init: function() {
		this.sprite = new Cortana.Sprite('../images/coin2.png', 28, 28, this.pos.x, this.pos.y);
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
		this.sprite = new Cortana.Sprite('../images/ghost.png', 32, 32, this.pos.x, this.pos.y);
	},
	
	update: function(dt) {

		if (g.input.pressed.up && this.pos.y > 0) {
			this.pos.y -= 5;
		}

		if (g.input.pressed.down && (this.pos.y + this.sprite.height) < Cortana.height) {
			this.pos.y += 5;
		}

		if (g.input.pressed.left && this.pos.x > 0) {
			this.pos.x -= 5;
		}

		if (g.input.pressed.right && (this.pos.x + this.sprite.width) < Cortana.width) {
			this.pos.x += 5;
		}

		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

g.add(bg);
g.add(coin);
g.add(player);

g.start();
