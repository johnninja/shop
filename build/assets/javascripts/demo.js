require(['./common'], function(){
	require(['lib','zepto'], function(lib, $){
		var oLinkage = document.querySelector('.three-linkage');
		var oCancel = oLinkage.querySelector('.linkage-cancel');
		var oConfirm = oLinkage.querySelector('.linkage-confirm');
		var oCover = oLinkage.querySelector('.linkage-cover');
		var oBody = oLinkage.querySelector('.linkage-body');
		var oColumns = oLinkage.querySelectorAll('.linkage-column');

		// oCover.addEventListener('touchstart', function(e){
		// 	return false;
		// }, true);	

		// oBody.addEventListener('touchstart', function(e){
		// 	console.log(e);
		// }, false);
		function Picker(){
			this.picker = oLinkage;
			this.cancelBtn = oCancel;
			this.confirmBtn = oConfirm;
			this.body = oBody;
			this.columns = [].slice.call(oColumns);
			this.oldValues = [].slice.call(arguments);
			this.values = [].slice.call(arguments);
			this.currentColumn = null;
			this.nextColumn = null;
		}

		Picker.prototype = {
			constructor: Picker,
			init: function(){
				var _this = this;
				
				_this.columns.forEach(function(column, index){
					var tmpValues = _this.values[index] || [];

					tmpValues.forEach(function(value, i){
						var item = document.createElement('div');
						item.className = 'item';
						item.innerText = value;
						column.appendChild(item);
						column.style.transform = 'translateY(0rem)';
					});

					_this.bindEvent(column);
				});
			},
			confirm: function(){
				this.picker.style.display = 'none';
				this.oldValues = this.values.concat();
			},
			cancel: function(){
				this.picker.style.display = 'none';
				this.values = this.oldValues.concat();
			},
			bindEvent: function(column){
				var _this = this;
				column.ontouchstart = function(e){
					var pageY = e.touches[0].pageY;
					var columnY = Number(column.style.transform.match(/((-)?\d+(\.\d+)?)/g)[0]);
					var oldPageY = pageY;
					_this.currentColumn = column;
					// _this.nextColumn = _this.columns[index + 1] || null;

					column.ontouchmove = function(e){
						document.ontouchmove = function(e){
							e.preventDefault();
						};
						var curPageY = e.touches[0].pageY;
						var deltaY = curPageY - pageY;
						var a = oldPageY - curPageY;
						column.style.transform = 'translateY('+ (columnY + deltaY) +'px)';
						oldPageY = curPageY;
						console.log(a);
					};
					column.ontouchend = function(e){
						column.ontouchmove = null;
						column.ontouchend = null;
						document.ontouchmove = null;
					};
				};
			}
		};

		var picker = new Picker(['hello','hello','hello','hello','hello','hello','hello','hello','hello'],['hhh'],['wah']);
		picker.init();

	});
});