require(['./common'], function(){
	require(['zepto', './modules/compute', './modules/checkall'], function($, Compute, CheckAll){
		
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
		var myCheckall = new CheckAll('#select-all');
		myCheckall.slave('.slave', function(){
			//全选回调
			for(var i in computeBoxes){
				computeBoxes[i].changeStatus(true);
			}
		},function(){
			//反选回调
			for(var i in computeBoxes){
				computeBoxes[i].changeStatus(false);
			}
		});
	});
});