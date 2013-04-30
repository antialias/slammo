require.config({
	paths: {
		jquery: './jquery-2.0.0.min',
		underscore: './underscore-amd',
		backbone: './backbone-amd'
	}});
define.amd.jQuery = true;
require(["jquery", "underscore", "backbone"], function (jQuery, _, Backbone) {
	jQuery.noConflict();
});