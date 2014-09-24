(function(Cortana) {
	'use strict';

	var Entity = function(args) {
		this.config = args || {};
		this.id = null;
		this.type = this.config.type || null;
		this.name = this.config.name || null;
		this.pos = {x: this.config.pos.x, y: this.config.pos.y};
		this.size = {width: 0, height: 0};
        this.zIndex = this.config.zIndex || 0;
		this.vel = this.config.vel || 0;
		this.state = null;
		this.dirty = false;
		this.remove = false;
		this.canCollide = this.config.canCollide || false;
		this.collisionCheck = this.config.collisionCheck || '',
		this.sprite = this.config.sprite;
		this.update = this.config.update;
		this.lastTime = this.config.lastTime || 0;

		if (this.config.handleCollision) {
			this.handleCollision = this.config.handleCollision;
		}

		if (this.config.destroy) {
			this.destroy = this.config.destroy;
		}

		this.init = this.config.init;

		this.init();
	};

	Entity.prototype = {

		init: function(pos) {
			console.log('init at ' + x + y);
		},

		update: function(dt) {
		},

		touches: function(other) {
			if (this.pos.x >= other.pos.x + other.sprite.width ||
				this.pos.x + this.sprite.width <= other.pos.x ||
				this.pos.y >= other.pos.y + other.sprite.height ||
				this.pos.y + this.sprite.height <= other.pos.y) {

				return false;
			} else {
				return true;
			}
		},

		handleCollision: function(other) {
		},

		destroy: function(other) {
			this.remove = true;
		}

	}

	Entity.prototype.constructor = Entity;
	Cortana.Entity = Entity;
}(Cortana));