var args = arguments[0] || {};

var type = args.type;
var collection = Alloy.Collections.Catagory;
collection.fetch({
		// query: 'SELECT * FROM model WHERE columns
		query: {
			statement: 'SELECT * FROM Catagory WHERE type = ?',
			params: [type]
		}
	});