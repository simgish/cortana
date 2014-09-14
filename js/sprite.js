(function(Cortana) {
	'use strict';

	var Sprite = function(imgPath, width, height, posX, posY) {
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
		}

	}

	Sprite.prototype.constructor = Sprite;
	Cortana.Sprite = Sprite;
}(Cortana));