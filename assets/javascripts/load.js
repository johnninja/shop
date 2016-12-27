define(['IScroll','zepto'],function(IScroll, $){
	var myScroll;
	var loading = $('.loader');

	function initScroll(){
		myScroll = new IScroll('#scroll-wrapper',{
			probeType: 3,
			preventDefault: false
		});

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
		document.addEventListener('touchmove', function(e){e.preventDefault();}, false);
	}
	function pullUpAction(){
		loading.html('<i class="loader-icon loading"></i><span>加载中...</span>');
		setTimeout(function(){
			var el, p, i;
			el = $('#scroll-wrapper .content');

			for (i = 0; i < 3; i++) {
				el.append('<p> generated '+ i +'</p>').append(loading);
			}
			loading.html('<i class="loader-icon"></i><span>上拉加载更多</span>');
			myScroll.refresh();
		}, 2000);
	}

	return initScroll;
});