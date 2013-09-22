exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "details ": "text",
		    "category ID": "integer",
		    "image": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "Item"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};