require(['./common'], function(){
	require(['zepto'], function($){
		$('.link-list').each(function(i, list){
			if ($(list).find('.item').length > 6) {
				$(list).addClass('hide');
				$(list).find('.show-more').click(function(e){
					$(this).removeClass('show-more').parents('.hide').removeClass('hide');
				});
			}
		});
	});
});