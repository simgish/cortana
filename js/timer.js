(function(Cortana) {
	'use strict';

	var Timer = function(game) {
		this.game = game;
		this.lastTime = null;
		this.now = null;
		this.dt = null;
	};

	Timer.prototype = {
		start: function() {
			var self = this;

			this.loop = function(dt) {
				return self.update(dt);

				this.now = Date.now();
				this.dt = this.now - this.lastTime;

				this.update(dt / 1000);
			};

			this.frameId = requestAnimationFrame(this.loop);
			
		},

		pause: function() {
			this.game.isPaused = true;
		},

		resume: function() {
			this.game.isPaused = false;
			this.reset();
		},

		reset: function() {
		},

		update: function(dt) {
			if (!this.game.isPaused) {
				this.game.update(dt);
			}

			this.frameId = requestAnimationFrame(this.loop);
		}
	}

	Timer.prototype.constructor = Timer;
	Cortana.Timer = Timer;
}(Cortana));