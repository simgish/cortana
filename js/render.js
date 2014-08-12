(function(Cortana) {
	'use strict';

	var Render = function(game) {
		this.game = game;
	};

	Render.prototype = {

		update: function(dt) {

		}	
	}

	Render.prototype.constructor = Render;
	Cortana.Render = Render;
}(Cortana));