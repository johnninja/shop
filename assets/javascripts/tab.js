require(['./common'], function(){
	require(['zepto'], function($){
		$('.tabs .tab').click(function(){
			var index = $(this).index();
			$(this).parent().find('.tab').removeClass('active').eq(index).addClass('active');
			$('.tab-content').hide().eq(index).show();
		});
	});
});