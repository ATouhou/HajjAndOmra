var args = arguments[0] || {};
var catagoryID = args.type;
var collection = Alloy.Collections.item;
collection.fetch({
		// query: 'SELECT * FROM model WHERE columns
		query: {
			statement: 'SELECT * FROM item WHERE catagoryID = ?',
			params: [catagoryID]
		}
	});