(function(Cortana) {
	'use strict';

	var Game = function(canvas, width, height) {
		var self = this;
		this.config = null;
		this.canvas = canvas;
		this.width = width;
		this.height = height;
		this.isRunning = false;
		this.isPaused = false;
		this.time = 0;
		this.frameId = null;

		this.entities = [];
		this.add = null;

		this.input = null;
		this.timer = null;
		this.render = null;

		this.isLoaded = false;
		this.debug = true;

		this.init();
		return this;
	};

	Game.prototype = {

		init: function() {
			var c = document.getElementById(this.canvas);
			c.style.width = this.width + 'px';
			c.style.height = this.height + 'px';

			Cortana.canvas = this.canvas;
			this.context = document.getElementById(Cortana.canvas).getContext('2d');

			// translate context to center of canvas
      // this.context.translate(c.width / 2, c.height / 2);

      // scale y component
      // this.context.scale(0.5, 0.5);

      this.input = new Cortana.Input(this);
      this.timer = new Cortana.Timer(this);
      this.render = new Cortana.Render(this);
      this.add = new Cortana.EntityManager(this).add;

      this.isLoaded = true;
  },

  start: function() {
  	this.timer.start();
  },

  reset: function() {
  },

  update: function(dt) {
	// Clear canvas
	var canvas = document.getElementById(Cortana.canvas);
	var context = document.getElementById(Cortana.canvas).getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Update entities
	for (var e = 0, elen = this.entities.length; e < elen; e += 1) {
		this.entities[e].update(dt);
	}

}
};

Game.prototype.constructor = Game;
Cortana.Game = Game;
}(Cortana));