define(['picker'], function(pickercity){
	var picker = $(".pick-btn").CityPicker("北京","北京","东城区",function(pro,city,dist){
		$(this).html(pro+city+dist);
	});

	return picker;
});