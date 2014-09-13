(function(Cortana) {
	'use strict';

	var Entity = function(args) {
		var _args = args || {};

		this.id = null;
		this.type = _args.type || null;
		this.name = _args.name || null;
		this.pos = {x: 0, y: 0};
		this.size = {width: 0, height: 0};
		this.state = null;
		this.dirty = false;
		this.sprite = null;

		// this.init(pos);

		// return this;
	};

	Entity.prototype = {

		init: function(pos) {
			console.log('init at ' + x + y);

		},

		addSprite: function(src) {
			this.sprite = new Cortana.Sprite(src, 256, 256);
		},

		draw: function(x, y) {

		},

		say: function(text) {
			console.log(text);
		},

		update: function(dt) {
			// console.log(this.name);
		}
	}

	Entity.prototype.constructor = Entity;
	Cortana.Entity = Entity;
}(Cortana));