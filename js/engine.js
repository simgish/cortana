this.cortana = this.cortana || {};

(function() {
	'use strict';

	var Engine = function() {
		// this.init();
	};

	var c = Engine.prototype;

	c.entities = [];

	c.addEntity = function addEntity(ent) {
		var next_index  = this.entities.length + 1;
		ent.id = next_index;

		var ent_id = this.entities.push(ent);
		this.entities.indexOf(ent);

		return this.entities.indexOf(ent);
	};

	c.removeEntity = function removeEntity(ent) {
		// this.entities.
	}

	c.run = function run() {
		console.log('run');
	};

	cortana.Engine = Engine;
}());