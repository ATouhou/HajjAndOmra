var catagoriess = [
	{type: '1', name:'مناسك الحج', image:'/images/default.png'},
	{type: '1', name:'مناسك العمرة', image:'/images/btn_maps_normal.png'},
	{type: '1', name:'المناسك المشتركة', image:'/images/btn_maps_pressed.png'},
	
	{type: '2', name:'مناسك الحج', image:'/images/default.png'},
	{type: '2', name:'مناسك العمرة', image:'/images/btn_maps_normal.png'},
	{type: '2', name:'المناسك المشتركة', image:'/images/btn_maps_pressed.png'},
	
	{type: '3', name:'مناسك الحج', image:'/images/default.png'},
	{type: '3', name:'مناسك العمرة', image:'/images/btn_maps_normal.png'},
	{type: '3', name:'المناسك المشتركة', image:'/images/btn_maps_pressed.png'},
];

mirgration.up=function (migrator){
	migrator.createTable('catagory',{
	'type':' number',
	'name':'string',
	'image':'string'
	})

for(var i=0;i<catagory.length;i++){
	migrator.insertRow(catagories[i])
}
}

migration.down=function(){
	migrator.dropTable();
}