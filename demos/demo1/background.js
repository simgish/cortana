var bg = new Cortana.Entity({
	name: 'bg',
	pos: {x: 0, y: 0},
	sprite: null,
	vel: 2,
    zIndex: 0,

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
    zIndex: 0,

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

game.add(bg);
game.add(bg2);
game.add(starfield);
game.add(starfield2);