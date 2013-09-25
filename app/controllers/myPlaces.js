var data=Alloy.Collections.MyPlaces;
data.fetch();

var dummy;
for(var i=0;i<10;i++){
	dummy=Alloy.createModel('MyPlaces',{
		name:'portsaid',
		description:'my city',
		longitude:32.283333,
		latitude:31.250000
	});
	data.add(dummy);
}

function maping(e){
	var index=e.itemIndex;
	var value=data.at(index);
	var map=Alloy.createController('markedMap',{details:value});
	map.getView().open();
}

$.header.rightNavButton.addEventListener('click', function(){
	Alloy.Globals.menu.toggleRightDrawer();
});