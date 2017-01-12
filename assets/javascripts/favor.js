require(['./common'], function(){
	require(['zepto'], function($){

		$('.favorite').find('.product-heart a').click(function(e){
			e.preventDefault();
			if ($(this).find('i').hasClass('icon-xin1')) {
				$(this).find('i').addClass('icon-xin5').removeClass('icon-xin1');
			}else{
				$(this).find('i').addClass('icon-xin1').removeClass('icon-xin5');
			}
		});
	});
});