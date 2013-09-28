var args = arguments[0] || {};

var type = args;
var collection = Alloy.createCollection('Catagory');
collection.fetch({
		// query: 'SELECT * FROM model WHERE columns
		query: {
			statement: 'SELECT * FROM Catagory WHERE type = ?',
			params: [type]
		}
	});