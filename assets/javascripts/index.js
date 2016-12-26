require.config({
	paths: {
		'lib': 'lib',
		'zepto': '../../bower_components/zepto/zepto.min'
	},
	shim: {
		'lib': {
			exports: 'lib'
		},
		'zepto': {
			exports: '$'
		}
	}
});
require(['zepto','lib'], function($, lib){
	console.log(lib);
});