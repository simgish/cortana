(function(Cortana) {
	'use strict';

	var Entity = function(args) {
		this.config = args || {};
		this.id = null;
		this.type = this.config.type || null;
		this.name = this.config.name || null;
		this.pos = {x: this.config.pos.x, y: this.config.pos.y};
		this.size = {width: 0, height: 0};
		this.state = null;
		this.dirty = false;
		this.sprite = this.config.sprite;
		this.update = this.config.update;
		this.init = this.config.init;

		this.init();
	};

	Entity.prototype = {

		init: function(pos) {
			console.log('init at ' + x + y);
		},

		draw: function(x, y) {

		},

		update: function(dt) {
		}
	}

	Entity.prototype.constructor = Entity;
	Cortana.Entity = Entity;
}(Cortana));