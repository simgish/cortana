this.cortana = this.cortana || {};

(function() {
	'use strict';

	var Entity = function(args) {
		var _args = args || {};

		this.id = null;
		this.type = _args.type || null;
		this.name = _args.name || null;
	};

	var c = Entity.prototype;

	c.say = function say(text) {
		console.log(text);
	};

	cortana.Entity = Entity;
}());