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

		this.render = null;

		this.isLoaded = false;

		// this.init();

		return this;
	};

	Game.prototype = {

		init: function(context, width, height) {
			this.context = context;
			this.width = width;
			this.height = height;
			this.isLoaded = true;
			this.render = new Cortana.Render(this);
			this.add = new Cortana.EntityManager(this).add;
			this.render.start();
		},

		update: function(dt) {
			console.log(dt);
		}
	};

	Game.prototype.constructor = Game;
	Cortana.Game = Game;
}(Cortana));