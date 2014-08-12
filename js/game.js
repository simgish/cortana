(function(Cortana) {
	'use strict';

	var Game = function(context, width, height) {
		var self = this;
		this.config = null;
		this.context = '';
		this.width = 800;
		this.height = 600;
		this.isRunning = false;
		this.isPaused = false;
		this.time = 0;
		this.frameId = null;

		this.entities = [];
		this.add = null;

		this.timer = null;
		this.render = null;

		this.isLoaded = false;
		this.debug = true;

		this.init();

		return this;
	};

	Game.prototype = {

		init: function(context, width, height) {
			this.context = context;
			this.width = width;
			this.height = height;
			this.isLoaded = true;
			this.input = new Cortana.Input(this);
			this.timer = new Cortana.Timer(this);
			this.render = new Cortana.Render(this);
			this.add = new Cortana.EntityManager(this).add;
			this.timer.start();
		},

		reset: function() {
		},

		update: function(dt) {
			this.input.update(dt);

			// Update each entity
			for (var e = 0, elen = this.entities.length; e < elen; e += 1) {
				this.entities[e].update(dt);
			}
		}
	};

	Game.prototype.constructor = Game;
	Cortana.Game = Game;
}(Cortana));