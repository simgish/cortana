(function(Cortana) {
	'use strict';

	var Sprite = function(options) {
		this.image;
		this.imgPath = options.imgPath;
		this.width = options.width;
		this.height = options.height;
		this.pos = {x: 0, y: 0};

		this.init(options);
		return this;
	};

	Sprite.prototype = {

		init: function(options) {
			this.image = new Image();
			this.image.src = options.imgPath;
			this.image.width = options.width;
			this.image.height = options.height;
			this.pos.x = options.x;
			this.pos.y = options.y;
		},

		render: function(c) {
			var context =  c.getContext("2d");

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