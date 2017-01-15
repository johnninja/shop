require(['./common'], function(){
	require(['zepto','./modules/compute'], function($, Compute){
		$('.tabs .tab').click(function(){
			var index = $(this).index();
			$(this).parent().find('.tab').removeClass('active').eq(index).addClass('active');
			$('.tab-content').hide().eq(index).show();
		});
		var colors = $('.p-color').find('.button');
		var heights = $('.p-height').find('.button');

		colors.click(function(e){
			colors.removeClass('red');
			$(this).addClass('red');
		});
		heights.click(function(e){
			heights.removeClass('red');
			$(this).addClass('red');
		});

		var newComBox = new Compute({
			minus: $('.compute-box .minus'),
			plus: $('.compute-box .plus'),
			shower: $('.compute-box .shower, .detail-footer-icon .badge')
		});
		newComBox.init();

		$('.detail-footer-buttons .button').click(function(e){
			var modal = $('.modal');
			modal.show();
			if ($(this).hasClass('black')) {
				$('.go-to-order').hide();
				$('.add-to-cart').show();
			}else{
				$('.go-to-order').show();
				$('.add-to-cart').hide();
			}
			setTimeout(function(){
				modal.find('.select-good-spec').addClass('active');
			}, 200);
		});

		var timer = null;
		$('.add-to-cart').click(function(e){
			e.preventDefault();
			clearTimeout(timer);
			$('.toast').addClass('show');
			timer = setTimeout(function(){
				$('.toast').removeClass('show');
			}, 1000);

			var modal = $('.modal');
			
			modal.find('.select-good-spec').removeClass('active');
			setTimeout(function(){
				modal.hide();
			}, 200);
		});
		$('.select-good-spec').find('.close-icon').click(function(e){
			var modal = $('.modal');
			
			modal.find('.select-good-spec').removeClass('active');
			setTimeout(function(){
				modal.hide();
			}, 200);

		});
	});
});