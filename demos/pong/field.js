var field = new Cortana.Entity({
	name: 'starfield2',
	pos: {x: 0, y: 0},
	sprite: null,
	vel: 0,

	init: function() {
		this.sprite = new Cortana.Sprite('images/field-brown.png', 800, 600, this.pos.x, this.pos.y);
	},

	update: function(dt) {
		this.sprite.draw(this.pos.x, this.pos.y);
	}
});

game.add(field);