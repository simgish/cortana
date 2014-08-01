(function(Cortana) {
	'use strict';

	Cortana.KEY = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39,
		SPACE: 32
	};

	var Input = function(game, keycode) {
		this.game = game;
	};

	Input.prototype = {

		init: function(x, y) {
			console.log('init at ' + x + y);

		},

		draw: function(x, y) {

		},

		say: function(text) {
			console.log(text);
		},

		update: function(dt) {
			// console.log(this.name);
		}
	}

	Input.prototype.constructor = Input;
	Cortana.Input = Input;
}(Cortana));