 (function(Cortana) {
	'use strict';

	var Sprite = function(imgPath, width, height, posX, posY, zIndex) {
		this.image;
		this.imgPath = imgPath;
		this.width = width;
		this.height = height;
		this.lastX = posX,
		this.lastY = posY,
		this.init();
		this.draw(posX, posY);

		return this;
	};

	Sprite.prototype = {

		init: function() {
			this.image = new Image();
			this.image.src = this.imgPath;
			this.image.width = this.width;
			this.image.height = this.height;
		},

		draw: function(posX, posY) {
			var canvas = document.getElementById(Cortana.canvas);
			var context = canvas.getContext('2d');

			context.drawImage(
				this.image,
				0,
				0,
				this.width,
				this.height,
				posX,
				posY,
				this.width,
				this.height
			);
			
		},

		createCanvas: function(width, height) {
			var canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;

			return canvas;
		},

		renderToCanvas: function(width, height, render, canvas) {
			var canvas = canvas || this.createCanvas(width, height);
			render(canvas.getContext('2d'));

			return canvas;
		}

	}

	Sprite.prototype.constructor = Sprite;
	Cortana.Sprite = Sprite;
}(Cortana));