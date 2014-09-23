game = new Cortana.Game('stage', 500, 313);

var lastTime = 0;
var coins = [];
var maxCoins = 3;

for (var c = 0; c < maxCoins; c++) {
	var coin = new Cortana.Entity({
		name: 'coin',
		pos: {x: Cortana.width / 2, y: 75 * (c+1)},
		vel: 1,
		zIndex: 2,
		sprite: null,
		canCollide: true,
		collisionCheck: 'player',

		init: function() {
			this.sprite = new Cortana.Sprite('../images/coin2.png', 28, 28, this.pos.x, this.pos.y);
			console.log(this.pos.x);
		},

		update: function(dt) {
			this.sprite.draw(this.pos.x, this.pos.y);
		}
	});

	coins.push(coin);
	game.add(coin);
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

    // for (var c = 0; c < maxCoins; c++) {
    //     var coin = game.getEntityById(coins[c].id);
    //     coin.update();
    // }
}

game.addScene(update);


