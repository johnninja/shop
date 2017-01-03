require(['./common'], function(){
	require(['zepto', './modules/compute'], function($, Compute){
		
		var computeBoxes = {};
		$('.product-list').each(function(index, item){
			var checkbox = $(this).find('input[type=checkbox]');

			computeBoxes[index] = new Compute({
				minus: $(item).find('.minus'),
				plus: $(item).find('.plus'),
				shower: $(item).find('.shower'),
				price: $(item).find('.product-price'),
				total: $('.check-price span'),
			});
			
			computeBoxes[index].init();

			if (checkbox.is(':checked')) {
				computeBoxes[index].changeStatus(true);
			}else{
				computeBoxes[index].changeStatus(false);
			}
			checkbox.click(function(e){
				if ($(this).is(':checked')) {
					computeBoxes[index].changeStatus(true);
				}else{
					computeBoxes[index].changeStatus(false);
				}
			});

		});
		var checkAllBtn = $('.checkall').find('input[type=checkbox]');
		checkAllBtn.click(function(e){
			$('.product-list input[type=checkbox]').each(function(index, item){
				if (checkAllBtn.is(':checked')) {
					$(this).attr('checked', true);
					computeBoxes[index].changeStatus(true);
				}else{
					$(this).removeAttr('checked');
					computeBoxes[index].changeStatus(false);
				}
			});
		});
	});
});