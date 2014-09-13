(function(Cortana) {
	'use strict';

	var Entity = function(args) {
		this.config = args || {};
		this.id = null;
		this.type = this.config.type || null;
		this.name = this.config.name || null;
		this.pos = {x: 0, y: 0};
		this.size = {width: 0, height: 0};
		this.state = null;
		this.dirty = false;
		this.sprite = null;

		this.update = this.config.update;
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
			this.update(dt);
		}
	}

	Entity.prototype.constructor = Entity;
	Cortana.Entity = Entity;
}(Cortana));