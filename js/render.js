this.Cortana = this.Cortana || {};

(function() {
	'use strict';

	var Render = function() {
		if (!window.requestAnimationFrame) {
			window.mozRequestAnimationFrame || 
			window.oRequestAnimationFrame || 
			window.msRequestAnimationFrame || 
			function(callback, element) {
				window.setTimeout(callback, 1000 / 60);
			}
		}
	};

	Render.prototype = {
		constructor: Render,

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
			console.log(dt);
			this.frameId = requestAnimationFrame(this.loop);
		}
	}

Cortana.Render = Render;
}());