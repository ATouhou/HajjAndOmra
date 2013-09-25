function ok() {
	alert("hi mohamed ?!");
}

var args = arguments[0] || {};


$.hiPort.setLatitude(args.details.get('latitude'));
$.hiPort.setLongitude(args.details.get('longitude'));
$.hiPort.setTitle('name:' + ' '+args.details.get('name') + " "+"\n" + 'description:' + args.details.get('description'));
//$.latitude.number = args.details.get('latitude');
//$.longitude.number = args.details.get('longitude');
//$.title.text = 'name:' + args.details.get('name') + "\n" + 'description' + args.details.get('description');

$.header.rightNavButton.addEventListener('click', function(){
	Alloy.Globals.menu.toggleRightDrawer();
});