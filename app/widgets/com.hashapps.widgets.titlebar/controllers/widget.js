var args = arguments[0]||{};
_.extend($.background, args);

_.extend($.lblTitle, args.title || {} );
_.extend($.rightNavButton, args.rightNavButton || {} );
_.extend($.leftNavButton, args.leftNavButton || {} );
_.extend($.imgLogo, args.imgLogo || {} );

function doClick(e) {  
    Alloy.Globals.back && Alloy.Globals.back();
}


exports.leftNavButton = $.leftNavButton;
exports.rightNavButton = $.rightNavButton;

exports.init = function(win){
	$.lblTitle.text = win.title;
	
	setTimeout(function(){
		$.lblTitle.text = win.title;
	}, 100);
}
