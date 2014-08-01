(function(Cortana) {
	'use strict';

	Cortana.KEY = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39,
		SPACE: 32
	};

	var Input = function(game) {
		this.game = game;
		this.keys = [];
	};

	Input.prototype = {

		init: function() {
		},

		update: function(dt) {
		}
	}

	Input.prototype.constructor = Input;
	Cortana.Input = Input;
}(Cortana));