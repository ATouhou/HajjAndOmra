exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "image": "string",
		    "type":"string"
		},
		adapter: {
			type: "sql",
			collection_name: "catagory",
			"db_file": "/db.db3",
			idAttribute: 'id'
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