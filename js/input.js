(function(Cortana) {
	'use strict';

	Cortana.KEY = {
		38: 'up',
		40: 'down',
		37: 'left',
		39: 'right',
		32: 'space'
	};

	var Input = function(game) {
		this.pressed = {
			up: false,
			down: false,
			left: false,
			right: false,
			space: false
		};

		this.init();
	}

	Input.prototype = {

		init: function() {
			addEventListener('keydown', this.handler.bind(this));
			addEventListener('keyup', this.handler.bind(this));
		},

		handler: function(event) {
			if (Cortana.KEY.hasOwnProperty(event.keyCode)) {
				var down = event.type == 'keydown';
				this.pressed[Cortana.KEY[event.keyCode]] = down;
				event.preventDefault();
			}
		}
	}

	Input.prototype.constructor = Input;
	Cortana.Input = Input;
}(Cortana));