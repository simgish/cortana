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
	}

	Game.prototype = {

		init: function() {
			var c = document.getElementById(this.canvas);
			c.setAttribute('width', this.width + 'px');
			c.setAttribute('height', this.height + 'px');

			Cortana.canvas = this.canvas;
			this.context = document.getElementById(Cortana.canvas).getContext('2d');

			Cortana.width = this.width;
			Cortana.height = this.height;

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

			context.save();

			// Use the identity matrix while clearing the canvas
			context.setTransform(1, 0, 0, 1, 0, 0);
			context.clearRect(0, 0, canvas.width, canvas.height);

			// Restore the transform
			context.restore();

			// Update entities
			for (var e = 0, elen = this.entities.length; e < elen; e += 1) {
				this.entities[e].update(dt);
			}
		}
	}

	Game.prototype.constructor = Game;
	Cortana.Game = Game;
}(Cortana));