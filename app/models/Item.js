exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "details ": "text",
		    "catagoryID": "integer",
		    "image": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "Item",
			"db_file": "/db.db3"
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