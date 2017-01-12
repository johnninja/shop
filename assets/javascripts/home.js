require(['./common'], function(){
	require(['zepto', 'plugins/citylinkage-master/js/citylinkage','lib', 'load', 'home-page-swiper' ], function($,CityPicker, lib, initScroll, initSwiper){
		var myScroll = initScroll();
		var mySwiper = initSwiper();
		setTimeout(myScroll.refresh.bind(myScroll),400);
		$('.pick-btn').citylinkage();
		$('.back-top').click(function(e){
			myScroll.scrollToElement($('.header').get(0));
		});
		// var picker = $(".pick-btn").CityPicker("北京","北京","东城区",function(pro,city,dist){
		// 	$(".pick-btn a").html(pro+'·'+city+'·'+dist);
		// });
	});
});