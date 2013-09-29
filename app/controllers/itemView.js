var args = arguments[0] || {};
var catagoryID = args.type;
var collection = Alloy.Collections.Item;
collection.fetch({
		// query: 'SELECT * FROM model WHERE columns
		query: {
			statement: 'SELECT * FROM Item WHERE catagoryID = ?',
			params: [catagoryID]
		}
	});