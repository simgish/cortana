var Cortana = {
	canvas: null,
	context: null
};

function random(min, max) {
	// return Math.random() * (max - min) + min;
	return min + (max - min) * Math.random()
}

function sortEntities(a, b) {
    return sort(a.zIndex - b.zIndex);
}

window.requestAnimationFrame = 
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame || 
			window.oRequestAnimationFrame || 
			window.msRequestAnimationFrame || 
			function(callback, element) {
				window.setTimeout(callback, 1000 / 60);
			};