game = new Cortana.Game('stage', 500, 313);

var lastTime = 0;
var coins = [];
var maxCoins = 3;
var meteors = [];
var maxMeteors = 6;
var score = 0;

for (var c = 0; c < maxCoins; c++) {
	var coin = new Cortana.Entity({
		name: 'coin',
		pos: {x: Cortana.width + random(28, Cortana.width), y: random(28, Cortana.height - 28)},
		vel: random(0.75, 1.5),
		zIndex: 2,
		sprite: null,
		canCollide: true,
		collisionCheck: 'player',
		lastTime: 0,

		init: function() {
			this.sprite = new Cortana.Sprite('../images/coin2.png', 28, 28, this.pos.x, this.pos.y);
		},

		update: function(dt) {
			var t = dt - this.lastTime;	

			if (t > this.vel) {
				this.pos.x -= this.vel;
				this.lastTime = dt;
			}

			if (this.pos.x < 0 - this.sprite.width) {
				var newVel = random(0.75, 1.5);
				this.pos = {x: Cortana.width + random(28, Cortana.width + (random(28, this.pos.x)*newVel)), y: random(28, Cortana.height - 28)};
				this.vel = newVel;

				// this.destroy();
			}

			this.sprite.draw(this.pos.x, this.pos.y);

		},

		handleCollision: function(other) {
			player.score += 1;
			var newVel = random(0.75, 1.5);
			this.pos = {x: Cortana.width + random(28, Cortana.width + (random(1, this.pos.x)*newVel)), y: random(28, Cortana.height - 28)};
			this.vel = newVel;
		}
	});

coins.push(coin);
game.add(coin);
}

for (var c = 0; c < maxMeteors; c++) {
	var meteor = new Cortana.Entity({
		name: 'meteor',
		pos: {x: Cortana.width + random(40, Cortana.width + (c*300)), y: random(-65, Cortana.height + 65)},
		vel: random(1.0, 2.5),
		zIndex: 2,
		sprite: null,
		canCollide: true,
		collisionCheck: '',
		lastTime: 0,

		init: function() {
			this.sprite = new Cortana.Sprite('../images/meteorBig.png', 136, 111, this.pos.x, this.pos.y);
		},

		update: function(dt) {
			var t = dt - this.lastTime;	

			if (t > this.vel) {
				this.pos.x -= this.vel;
				this.lastTime = dt;
			}

			if (this.pos.x < 0 - this.sprite.width) {
				player.score -= 1;
				var newVel = random(1.0, 2.5);
				this.pos = {x: Cortana.width + random(136, Cortana.width + (random(15, 65)*newVel+1)), y: random(-65, Cortana.height + 65)};
				this.vel = newVel;
			}

			this.sprite.draw(this.pos.x, this.pos.y);

		}
	});

	meteors.push(meteor);
	game.add(meteor);
}

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


