require.config({
	paths: {
		'lib': 'lib',
		'zepto': '../../bower_components/zepto/zepto.min',
		'IScroll': '../../bower_components/iscroll/build/iscroll-probe'
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