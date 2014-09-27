(function(Cortana) {
	'use strict';

	var Scene = function(game) {
		this.game = game;

		return this;
	};

	Scene.prototype = {

		init: function(pos) {
			console.log('init at ' + x + y);
		},

		update: function(dt) {
		}

	}

	Scene.prototype.constructor = Scene;
	Cortana.Scene = Scene;
}(Cortana));