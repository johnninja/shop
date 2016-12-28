require(['./common'], function(){
	require(['plugins/city-picker/citypicker', 'zepto','lib', 'load', 'home-page-swiper' ], function(CityPicker, $, lib, initScroll, initSwiper){
		var myScroll = initScroll();
		var mySwiper = initSwiper();
		setTimeout(myScroll.refresh.bind(myScroll),400);
		var picker = $(".pick-btn").CityPicker("河北","邯郸","复兴区",function(pro,city,dist){
			alert(pro+city+dist);
		});
	});
});