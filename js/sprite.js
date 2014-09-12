(function(Cortana) {
	'use strict';

	var Sprite = function(options) {
		this.image;
		this.imgPath = options.imgPath;
		this.pos = {x: 0, y: 0};

		this.init(options);
	};

	Sprite.prototype = {

		init: function(options) {
			this.image = new Image();
			this.image.src = options.imgPath;
			this.pos.x = options.x;
			this.pos.y = options.y;
		}

	}

	Sprite.prototype.constructor = Sprite;
	Cortana.Sprite = Sprite;
}(Cortana));