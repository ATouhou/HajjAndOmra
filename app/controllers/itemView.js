var args = arguments[0] || {};
var catagoryID = args;
var collection = Alloy.createCollection('Item');
collection.fetch({
		// query: 'SELECT * FROM model WHERE columns
		query: {
			statement: 'SELECT * FROM Item WHERE catagoryID = ?',
			params: [catagoryID]
		}
	});