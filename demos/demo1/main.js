game = new Cortana.Game('stage', 500, 313);

var bg = new Cortana.Entity({
	name: 'bg',
	pos: {x: 0, y: 0},
	sprite: null,
	vel: 2,

	init: function() {
		this.sprite = new Cortana.Sprite('../images/citybg2.png', 500, 313, this.pos.x, this.pos.y);
	},

	update: function(dt) {
		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

var bg2 = new Cortana.Entity({
	name: 'bg2',
	pos: {x: Cortana.width, y: 0},
	sprite: null,
	vel: 2,

	init: function() {
		this.sprite = new Cortana.Sprite('../images/citybg2.png', 500, 313, this.pos.x, this.pos.y);
	},

	update: function(dt) {
		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

var starfield = new Cortana.Entity({
	name: 'starfield',
	pos: {x: 0, y: -250},
	sprite: null,
	vel: 0.5,

	init: function() {
		this.sprite = new Cortana.Sprite('../images/starfield.png', 500, 313, this.pos.x, this.pos.y);
	},

	update: function(dt) {
		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

var starfield2 = new Cortana.Entity({
	name: 'starfield2',
	pos: {x: Cortana.width, y: -250},
	sprite: null,
	vel: 0.5,

	init: function() {
		this.sprite = new Cortana.Sprite('../images/starfield.png', 500, 313, this.pos.x, this.pos.y);
	},

	update: function(dt) {
		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

var coin = new Cortana.Entity({
	name: 'coin',
	pos: {x: 0, y: 0},
	sprite: null,
	canCollide: true,

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
	canCollide: true,
	
	init: function() {
		this.sprite = new Cortana.Sprite('../images/ship.png', 32, 32, this.pos.x, this.pos.y);
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

game.add(bg);
game.add(bg2);
game.add(starfield);
game.add(starfield2);
game.add(coin);
game.add(player);

var lastTime = 0;

function update(dt) {
	var t = dt - lastTime;

	if (t > bg.vel) {
		bg.pos.x -= bg.vel;
		bg2.pos.x -= bg2.vel;
		starfield.pos.x -= starfield.vel;
		starfield2.pos.x -= starfield2.vel;

		if (bg.pos.x <= -Cortana.width) {
			bg.pos.x = Cortana.width;
		}

		if (bg2.pos.x <= -Cortana.width) {
			bg2.pos.x = Cortana.width;
		}

		if (starfield.pos.x <= -Cortana.width) {
			starfield.pos.x = Cortana.width;
		}

		if (starfield2.pos.x <= -Cortana.width) {
			starfield2.pos.x = Cortana.width;
		}

		lastTime = dt;
	}
}

game.addScene(update);

game.start();
