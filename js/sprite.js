(function(Cortana) {
	'use strict';

	var Sprite = function(imgPath, width, height) {
		this.image;
		this.imgPath = imgPath;
		this.width = width;
		this.height = height;
		this.pos = {x: 0, y: 0};
		this.init();
		// return this;
	};

	Sprite.prototype = {

		init: function() {
			this.image = new Image();
			this.image.src = this.imgPath;
			this.image.width = this.width;
			this.image.height = this.height;
			this.pos.x = this.pos.x;
			this.pos.y = this.pos.y;
		},

		render: function() {
			var context = document.getElementById(Cortana.context).getContext('2d');

			context.drawImage(
				this.image,
				0,
				0,
				this.width,
				this.height,
				0,
				0,
				this.width,
				this.height);
		}

	}

	Sprite.prototype.constructor = Sprite;
	Cortana.Sprite = Sprite;
}(Cortana));