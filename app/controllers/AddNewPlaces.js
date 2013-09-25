var testGPS = function(_callback) {

};

function checkGPS(argument) {

	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.error == true) {
			alert(e.error);
			return;
		} else {
			mylongitude = e.coords.longitude;
			mylatitude = e.coords.latitude;
			entry_accuracy = e.coords.accuracy;
			entry_timestamp = e.coords.timestamp;
			Titanium.Geolocation.reverseGeocoder(mylatitude, mylongitude, function(evt) {
				var places = evt.places;
				entry_address = places[0].address;
			});
		}

	});

}

function savePlace(argument) {
	var place = Alloy.createModel('MyPlaces', {

		name : $.placeTitle.value,
		description : $.placeDescription.value,
		location : ""
	});
	place.save();
	alert('Done');
	$.win.close();
}

