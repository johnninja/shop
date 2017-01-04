require(['./common'], function(){
	require(['zepto','./modules/compute'], function($,Compute){
		$('.order-list').each(function(index,item){
			new Compute({
				minus: $(item).find('.minus'),
				plus: $(item).find('.plus'),
				shower: $(item).find('.shower')
			}).init();
		});
	});
});