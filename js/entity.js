this.cortana = this.cortana || {};

(function() {
	'use strict';

	var Entity = function(args) {
		var _args = args || {};

		this.id = null;
		this.type = _args.type || null;
		this.name = _args.name || null;
		this.state = null;
		this.dirty = false;
	};

	Entity.prototype = {

		constructor: Entity,

		say: function(text) {
			console.log(text);
		},

		update: function(delta) {

		}
	}

	cortana.Entity = Entity;
}());