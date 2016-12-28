define(['IScroll','zepto'],function(IScroll, $){
	var myScroll, carouselScroll;
	var loading = $('.loader');
	var testTemp = '<div class="card column two">'+
		'<a href="#">'+
			'<div class="card-header">'+
				'<img src="" alt="">'+
			'</div>'+
			'<div class="card-footer">'+
				'<div class="p-name">生·瓷器</div>'+
				'<div class="p-category">手工艺品</div>'+
				'<div class="p-price">¥123</div>'+
			'</div>'+
		'</a>'+
	'</div>';

	function initScroll(){
		myScroll = new IScroll('#scroll-wrapper',{
			probeType: 3,
			preventDefault: false
		});

		myScroll.scrollToElement('body');

		myScroll.on('scroll', function(){
			if (this.y < this.maxScrollY + 10) {
				loading.html('<i class="loader-icon"></i><span>释放完成加载！</span>');
			}else if(this.y < this.maxScrollY + 30){
				loading.html('<i class="loader-icon"></i><span>上拉加载更多</span>');
			}
		});
		myScroll.on('scrollEnd', function(){
			if (this.y <= this.maxScrollY) {
				pullUpAction();
			}
		});

		myScroll.on('refresh', function(){
			loading.html('<i class="loader-icon"></i><span>上拉加载更多</span>');
		});

		document.addEventListener('touchmove', function(e){e.preventDefault();}, false);
		return myScroll;
	}
	function pullUpAction(){
		loading.html('<i class="loader-icon loading"></i><span>加载中...</span>');
		setTimeout(function(){
			var el, p, i;
			el = $('#scroll-wrapper .content .floor');

			for (i = 0; i < 4; i++) {
				el.append($(testTemp));
			}
			loading.html('<i class="loader-icon"></i><span>上拉加载更多</span>');
			myScroll.refresh();
		}, 2000);
	}

	return initScroll;
});