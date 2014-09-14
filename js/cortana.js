var Cortana = {
	canvas: null,
	context: null
};

window.requestAnimationFrame = 
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame || 
			window.oRequestAnimationFrame || 
			window.msRequestAnimationFrame || 
			function(callback, element) {
				window.setTimeout(callback, 1000 / 60);
			};