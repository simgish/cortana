this.Cortana = this.Cortana || {};

(function() {
	'use strict';

	var Render = function() {
		
	};

	Render.prototype = {
		start: function() {
			var self = this;

			this.loop = function(dt) {
				return self.update(dt);

				// var now = Date.now();
				// var dt = now - this.lastTime;

				this.update(dt / 1000);
			};

			this.frameId = requestAnimationFrame(this.loop);
			
		},

		update: function(dt) {
			// console.log(dt);
			this.frameId = requestAnimationFrame(this.loop);
		}
	}

	Render.prototype.constructor = Render;
	Cortana.Render = Render;
}());