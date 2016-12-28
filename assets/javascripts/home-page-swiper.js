define(['swiper'], function(){
	function initSwiper(){
		var swiper = new Swiper('.swiper-container',{
			 pagination: '.swiper-pagination',
			 autoplay: 3000
		});
		return swiper;
	}
	return initSwiper; 
});