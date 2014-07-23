this.Cortana = this.Cortana || {};

(function() {
	'use strict';

	var Entity = function(args) {
		console.log(args);
		var _args = args || {};

		this.id = null;
		this.type = _args.type || null;
		this.name = _args.name || null;
		this.state = null;
		this.dirty = false;
	};

	Entity.prototype = {
		say: function(text) {
			console.log(text);
		},

		update: function(delta) {

		}
	}

	Entity.prototype.constructor = Entity;
	Cortana.Entity = Entity;
}());