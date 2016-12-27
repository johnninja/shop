define(['IScroll'],function(IScroll){
	function initScroll(){
		var myScroll = new IScroll('#wrapper');

		myScroll.on('scrollEnd', function(){
			
		});
	}

	function pullUpAction(){
		setTimeout(function(){
			var el, p, i;
			el = document.getElementById('wrapper');

			for (i = 0; i < 3; i++) {
				p = document.createElement('p');
				p.innerText = 'new '+i;
				el.appendChild(p, el.childNodes[0]);
			}

			myScroll.refresh();
		}, 2000);
	}

	return initScroll;
});