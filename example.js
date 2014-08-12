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
