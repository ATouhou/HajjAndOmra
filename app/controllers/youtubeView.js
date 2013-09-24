$.header.rightNavButton.addEventListener('click', function() {

	Alloy.Globals.menu.toggleRightDrawer();
});
var collec = Alloy.Collections.Youtube;
var mdl ;
for (var i=1; i < 11 ; i++) {
    mdl = Alloy.createModel('Youtube', {
  	name : "مناسك الحج و العمرة" ,
  	description : "حكم الحج ،  وقت أداء الحج ،  مواقيت الحج ،  خصائص الحرم ،  خصائص البيت الحرام ،  شروط وجوب الحج ،  أركان الحج ،  واجبات الحج ،  سنن وآداب تتعلق بالحج ،  أنواع النسك ،  مفسدات الحج ،  الكفارات في الحج " ,
  	thumb : "/images/video_thumb.png"
  });
  collec.add(mdl);
};