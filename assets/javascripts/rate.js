require(['./common'], function(){
	require(['zepto'], function($){
		$('.rate .star').click(function(e){
			var idx = $(this).index();
			$('.rate .star').each(function(index,item){
				if (index > idx) {
					$(item).removeClass('active');
				}else{
					$(item).addClass('active');
				}
			});
		});
	});
});