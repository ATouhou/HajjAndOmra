var currentPlace;
var mekka = {
	latitude: "21.416677",
	longitude: "39.816663",
	animate: true,
	regionFit: true,
	latitudeDelta: 1,
	longitudeDelta: 2
};

function checkGPS(argument) {
	Ti.Geolocation.purpose = "عرض المكان الحالي على الخريطة";
	
	if (Titanium.Geolocation.locationServicesEnabled == false) {

		var dialog = Ti.UI.createAlertDialog({
			open : 0,
			cancel : 1 ,
			buttonNames : ['تفعيل تحديد المكان', 'الغاء'],
			message : 'تحديد الماكن غير مفعل , هل ترغب فى تفعيله ؟',
			title : 'تحذير'
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
				if (e.coords.accuracy <= 500 && (new Date().getTime() - e.coords.timestamp) < 86400000) {
					mylongitude = e.coords.longitude;
					mylatitude = e.coords.latitude;
					entry_accuracy = e.coords.accuracy;
					entry_timestamp = e.coords.timestamp;
					Titanium.Geolocation.reverseGeocoder(mylatitude, mylongitude, function(evt) {
						var places = evt.places;
						if ($.placeDescription.value == '')
							$.placeDescription.value = places[0].address;
					});
					$.mapView.setLocation({
						latitude: mylatitude,
						longitude: mylongitude,
						animate: true});
					currentPlace.applyProperties({
						latitude: mylatitude,
						longitude: mylongitude,
						animate: true});
				}
			}

		});

		Titanium.Geolocation.addEventListener('location', function locationListner(e) {
			if (e.error) {
				alert(e.error);
				return;
			} else {
				if (e.coords.accuracy <= 500) {
					
					Titanium.Geolocation.removeEventListener('location', locationListner);
					
					mylongitude = e.coords.longitude;
					mylatitude = e.coords.latitude;
					entry_accuracy = e.coords.accuracy;
					entry_timestamp = e.coords.timestamp;
					Titanium.Geolocation.reverseGeocoder(mylatitude, mylongitude, function(evt) {
						var places = evt.places;
						entry_address = places[0].address;
						if ($.placeDescription.value == '')
							$.placeDescription.value = places[0].address;
					});
					$.mapView.setLocation({
						latitude: mylatitude,
						longitude: mylongitude,
						animate: true});
					currentPlace.applyProperties({
						latitude: mylatitude,
						longitude: mylongitude,
						animate: true});
				}
			}
		});
	}
}

function savePlace(argument) {
	var place = Alloy.createModel('myplaces', {

		name : $.placeTitle.value,
		description : $.placeDescription.value,
		latitude : mylatitude,
		longitude : mylongitude
	});
	place.save();
	Ti.App.fireEvent("app:update");
	$.win.close();
	alert('تم حفظ المكان');
}

$.mapView.setLocation(mekka);

currentPlace = Ti.Map.createAnnotation({
		draggable:true,
		animate: true,
		latitude: mekka.latitude,
		longitude: mekka.longitude,
		title: $.placeTitle.value || 'مكان'
	});
$.mapView.addAnnotation(currentPlace);

function mapClicked(e){
	if(!currentPlace){
		
	}
}

$.placeTitle.setHeight(0.07*Titanium.Platform.displayCaps.platformHeight);
$.placeDescription.setHeight(0.11*Titanium.Platform.displayCaps.platformHeight);
$.mapView.setHeight(0.55*Titanium.Platform.displayCaps.platformHeight);
$.save.setHeight(0.1*Titanium.Platform.displayCaps.platformHeight);
