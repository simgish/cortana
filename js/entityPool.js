this.Cortana = this.Cortana || {};

(function() {
	'use strict';
	
	var EntityPool = function() {
		this.entities = [];
	};

	EntityPool.prototype = {

		add: function(ent) {
			var entity = new Cortana.Entity(ent);
			var next_index  = this.entities.length + 1;
			entity.id = next_index;

			var ent_id = this.entities.push(entity);
			this.entities.indexOf(entity);

			return this.entities.indexOf(entity);
		},

		cleanupEntities: function() {
			for (var i = 0, len = this.entities.length; i < len; i++) {
				if (this.entities[i].dirty) {
					this.entities.splice(i--, 1);
				}
			}
			return this.entities;
		},

		getEntities: function() {
			return this.entities;
		},
	};

	EntityPool.prototype.constructor = EntityPool;
	Cortana.EntityPool = EntityPool;
}());