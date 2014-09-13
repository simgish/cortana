g = new Cortana.Game('stage', 800, 600);

var player = new Cortana.Entity({
	name: 'player',
	
	update: function(dt) {
		// console.log(dt);
		// console.log('player update function');

		if (g.input.pressed.up) {
			console.log('up pressed');
		}

		if (g.input.pressed.down) {
			console.log('down pressed');
		}

		if (g.input.pressed.left) {
			console.log('left pressed');
		}

		if (g.input.pressed.right) {
			console.log('right pressed');
		}
	}
});

g.add(player);

// g.add(Cortana.Entity({
// 	name: 'enemy'
// }));


// var canvas = document.getElementById('stage');
// canvas.width = 800;
// canvas.height = 600;

// var coin = new Cortana.Sprite({imgPath:'/images/coin.png', height: 256, width: 256});

// coin.render(canvas);

// g.init();