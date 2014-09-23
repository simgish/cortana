(function(Cortana) {
	'use strict';

	var Loader = function(game) {
		this.game = game;
		this.images = [];
		this.done = false;
	};

	Loader.prototype = {

		update: function(dt) {

		}	
	}

	Loader.prototype.constructor = Loader;
	Cortana.Loader = Loader;
}(Cortana));