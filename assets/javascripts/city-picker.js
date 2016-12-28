define(['picker'], function(pickercity){
	var picker = $(".pick-btn").CityPicker("河北","邯郸","复兴区",function(pro,city,dist){
		alert(pro+city+dist);
	});

	return picker;
});