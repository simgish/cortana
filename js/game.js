this.Cortana = this.Cortana || {};

(function() {
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

		// return this;
	};

	Game.prototype = {

		init: function() {
			this.isLoaded = true;
			this.render = new Cortana.Render();

			this.render.start();
		},

		addEntity: function(entity) {
			var next_index  = this.entities.length + 1;
			entity.id = next_index;

			var ent_id = this.entities.push(entity);
			this.entities.indexOf(entity);

			return this.entities.indexOf(entity);
		},

		cleanupEntities: function() {
			for (var i = 0, len = this.entities.length; i < len; i++) {
				if (this.entities[i].dirty) {
					this.entities.splice(i--, 1);
				}
			}
			return this.entities;
		},

		getEntities: function() {
			return this.entities;
		},

		update: function(dt) {
			console.log(dt);
		}
	};

	Game.prototype.constructor = Game;
	
	Cortana.Game = Game;
}());