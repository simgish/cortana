game = new Cortana.Game('stage', 800, 600);

var lastTime = 0,
	player1,
	player2,
	ball;

player1 = new Cortana.Entity({
	name: 'player',
	pos: {x: 16, y: Cortana.width / 2 - 130},
    zIndex: 9999, 
	sprite: null,
	canCollide: true,
	collisionCheck: 'ball',
	score: 0,
	vel: 10,
	
	init: function() {
		this.sprite = new Cortana.Sprite('images/paddle-green.png', 24, 104, this.pos.x, this.pos.y, this.zindex);
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

	}
});

player2 = new Cortana.Entity({
	name: 'player',
	pos: {x: Cortana.width - 40, y: Cortana.width / 2 - 130},
    zIndex: 9999, 
	sprite: null,
	canCollide: true,
	collisionCheck: 'ball',
	score: 0,
	vel: 10,
	
	init: function() {
		this.sprite = new Cortana.Sprite('images/paddle-orange.png', 24, 104, this.pos.x, this.pos.y, this.zindex);
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

	}
});

ball = new Cortana.Entity({
	name: 'player',
	pos: {x: Cortana.width / 2 - 12, y: Cortana.height / 2},
    zIndex: 9999, 
	sprite: null,
	canCollide: true,
	collisionCheck: 'player',
	score: 0,
	xVel: 10,
	yVel: 10,
	vel: 10,
	defaultVel: 10,
	goingLeft: true,
	
	init: function() {
		this.sprite = new Cortana.Sprite('images/ball.png', 24, 24, this.pos.x, this.pos.y, this.zindex);
	},
	
	update: function(dt) {

		if (this.goingLeft) {
			this.pos.x -= this.vel;
		} else {
			this.pos.x += this.vel;
		}

		// this.pos.x += this.xVel;
		// this.pos.y += this.yVel;

		this.sprite.draw(this.pos.x, this.pos.y);
	},

	handleCollision: function(other) {
		if (this.goingLeft) {
			this.goingLeft = false;
			this.vel = defaultVel;
		} else {
			this.goingLeft = true;
			this.vel = defaultVel;
		}

	}
});


game.add(player1);
game.add(player2);
game.add(ball);

function update(dt) {
	var t = dt - lastTime;
}

game.addScene(update);

