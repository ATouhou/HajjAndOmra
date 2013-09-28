function checkGPS(argument) {

	if (Titanium.Geolocation.locationServicesEnabled == false) {
		// Titanium.UI.createAlertDialog({
		// title : 'GPS',
		// message : 'Your GPS is turned off. Please switch it on.'
		// }).show();

		// var settingsIntent = Titanium.Android.createIntent({
		// action : 'android.settings.LOCATION_SOURCE_SETTINGS'
		// });
		// Ti.Android.currentActivity.startActivity(settingsIntent);

		var dialog = Ti.UI.createAlertDialog({
			open : 0,
			cancel : 1 ,
			buttonNames : ['Open GPS', 'Cancel'],
			message : 'GPS is turned off , Would you like to open it ?',
			title : 'GPS Setting'
		});
		dialog.addEventListener('click', function(e) {
			if (e.index === e.source.open) {
				var settingsIntent = Titanium.Android.createIntent({
					action : 'android.settings.LOCATION_SOURCE_SETTINGS'
				});
				Ti.Android.currentActivity.startActivity(settingsIntent);
			}
			Ti.API.info('e.cancel: ' + e.cancel);
			Ti.API.info('e.source.cancel: ' + e.source.cancel);
			Ti.API.info('e.index: ' + e.index);
		});
		dialog.show();

	} else {
		Titanium.Geolocation.getCurrentPosition(function(e) {
			if (e.error) {
				alert(e.error);
				return;
			} else {
				if (e.coords.accuracy <= 500) {
					mylongitude = e.coords.longitude;
					mylatitude = e.coords.latitude;
					entry_accuracy = e.coords.accuracy;
					entry_timestamp = e.coords.timestamp;
					Titanium.Geolocation.reverseGeocoder(mylatitude, mylongitude, function(evt) {
						var places = evt.places;
						entry_address = places[0].address;
					});
				}
			}

		});

		Titanium.Geolocation.addEventListener('location', function(e) {
			if (e.error) {
				alert(e.error);
				return;
			} else {
				if (e.coords.accuracy <= 500) {
					mylongitude = e.coords.longitude;
					mylatitude = e.coords.latitude;
					entry_accuracy = e.coords.accuracy;
					entry_timestamp = e.coords.timestamp;
					Titanium.Geolocation.reverseGeocoder(mylatitude, mylongitude, function(evt) {
						var places = evt.places;
						entry_address = places[0].address;
						

					});
				}
			}
		});
	}
}

function savePlace(argument) {
	var place = Alloy.createModel('MyPlaces', {

		name : $.placeTitle.value,
		description : $.placeDescription.value,
		latitude : mylatitude,
		longitude : mylongitude
	});
	place.save();
	Ti.App.fireEvent("app:update");
	$.win.close();
	alert('Your Place Was Saved');
}

