require(['./common'], function(){
	require(['zepto','lib','IScroll', 'load'], function($, lib, IScroll, initScroll){
		var myScroll = initScroll();
		setTimeout(myScroll.refresh.bind(myScroll),400);
	});
});