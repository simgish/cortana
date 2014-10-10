game = new Cortana.Game('stage', 800, 600);

var lastTime = 0,
	player1,
	player2;

player1 = new Cortana.Entity({
	name: 'player',
	pos: {x: 16, y: Cortana.width / 2 - 130},
    zIndex: 9999, 
	sprite: null,
	canCollide: true,
	collisionCheck: 'coin',
	score: 0,
	vel: 10,
	
	init: function() {
		this.sprite = new Cortana.Sprite('images/paddle.png', 24, 104, this.pos.x, this.pos.y, this.zindex);
	},
	
	update: function(dt) {

		if (game.input.pressed.a && this.pos.y > 0) {
			this.pos.y -= this.vel;
		}

		if (game.input.pressed.z && (this.pos.y + this.sprite.height) < Cortana.height) {
			this.pos.y += this.vel;
		}

		this.sprite.draw(this.pos.x, this.pos.y);
	},

	handleCollision: function(other) {
		// other.destroy(this);
	}
});

player2 = new Cortana.Entity({
	name: 'player',
	pos: {x: Cortana.width - 40, y: Cortana.width / 2 - 130},
    zIndex: 9999, 
	sprite: null,
	canCollide: true,
	collisionCheck: 'coin',
	score: 0,
	vel: 10,
	
	init: function() {
		this.sprite = new Cortana.Sprite('images/paddle.png', 24, 104, this.pos.x, this.pos.y, this.zindex);
	},
	
	update: function(dt) {

		if (game.input.pressed.quote && this.pos.y > 0) {
			this.pos.y -= this.vel
		}

		if (game.input.pressed.question && (this.pos.y + this.sprite.height) < Cortana.height) {
			this.pos.y += this.vel;
		}

		this.sprite.draw(this.pos.x, this.pos.y);
	},

	handleCollision: function(other) {
		// other.destroy(this);
	}
});

game.add(player1);
game.add(player2);

function update(dt) {
	var t = dt - lastTime;
}

game.addScene(update);

