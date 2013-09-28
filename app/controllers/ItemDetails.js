var args = arguments[0] || {};

if (args.get) {
	$.header.text = args.get('name');
	$.image.image = args.get('image');
	$.details.text = args.get('details');
} 

function show(){
	var image=args.get('image');
	var video=args.get('video');
	
	if(video){
		var x=Alloy.createController('browser',{video:video}).getView();
		x.open();
	}else{
		var x=Alloy.createController('browser',{image:image}).getView();
		x.open();
		
	}

}

