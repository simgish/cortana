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

		this._keyDown = null;

		this.init();
	};

	Input.prototype = {

		init: function() {
			window.addEventListener('keydown', this.keyDown);
			window.addEventListener('keyup', this.keyUp);
		},

		update: function(dt) {
		},

		keyDown: function(event) {
			event.stopPropagation();
			event.preventDefault();
		},

		keyUp: function(event) {
			
		}
	}

	Input.prototype.constructor = Input;
	Cortana.Input = Input;
}(Cortana));