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
		this.canCollide = this.config.canCollide || false;
		this.sprite = this.config.sprite;
		this.update = this.config.update;
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
				return true
			}
		}

		/*
		return !(
			this.pos.x >= other.pos.x + other.size.x ||
			this.pos.x + this.size.x <= other.pos.x ||
			this.pos.y >= other.pos.y + other.size.y ||
			this.pos.y + this.size.y <= other.pos.y
		);

		public boolean collidesWith(Entity other) {
		me.setBounds((int) x,(int) y,sprite.getWidth(),sprite.getHeight());
		him.setBounds((int) other.x,(int) other.y,other.sprite.getWidth(),other.sprite.getHeight());

		return me.intersects(him);
		}
		*/

	}

	Entity.prototype.constructor = Entity;
	Cortana.Entity = Entity;
}(Cortana));