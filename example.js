g = new Cortana.Game('#stage', 600, 800);

var player = Cortana.Entity({
	name: 'player',
	x: 0,
	y: 0
});

g.add(player);

g.add(Cortana.Entity({
	name: 'enemy'
}));

var canvas = document.getElementById('stage');
canvas.width = 800;
canvas.height = 600;

var coin = new Cortana.Sprite({imgPath:'/images/coin.png', height: 256, width: 256});

coin.render(canvas);

g.init();