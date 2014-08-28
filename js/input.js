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
		this.keys = {};
		this.bindings = {};

		this.init();
	};

	Input.prototype = {

		init: function() {
			window.addEventListener('keydown', this.keyDown.bind(this), false);
			window.addEventListener('keyup', this.keyUp.bind(this), false);
		},

		update: function(dt) {
			// console.log(this.bindings)
		},

		bind: function(key, action) {
			this.bindings[key] = action;
		},

		keyDown: function(event) {
			var action = this.bindings[event.keyCode];
			
			
			event.stopPropagation();
			event.preventDefault();
		},

		keyUp: function(event) {
			var action = Cortana.KEY[event.keyCode];
			this.keys[action] = event;


		}
	}

	Input.prototype.constructor = Input;
	Cortana.Input = Input;
}(Cortana));