/*$(document).ready(function () {
	var $header = $(".site-header")
		, $menu = $(".menu")
		, $nav = $(".site-nav")
		, $tool = $(".cv-tool");
	
	$menu.on("click", function () {
		$(this).toggleClass("active");
		$(this).parent().find($nav).toggleClass("active");
	});
	
	$tool.on("click", function(){
		$(this).siblings(".tool-info").toggleClass("active");
	});
	
	var $grid = $('.grid').imagesLoaded(function () {
		$grid.masonry({
			columnWidth: '.grid-sizer'
			, itemSelector: '.grid-item'
			, percentPosition: true
		});
	});
	
	var download = function (file) {
		document.location = file;
	}
});*/
var MATHS = MATHS || {};

/*
	POPUP
*/
MATHS.Popup = {};
MATHS.Popup.open = function( id, callback ){
	$( "#"+id ).addClass( "active" );
	$('body').addClass("hidden");
	if( callback ){
		callback();
	}
}

MATHS.Popup.close = function( id, callback ){
	$( "#"+id ).removeClass( "active" );
	$('body').removeClass("hidden");
	if( callback ){
		callback();
	}
}

MATHS.Modules = function( id ){
	
}

MATHS.download =  function( file ){
	document.location = file;
}

MATHS.init = function(){
	
	var $header = $(".site-header")
		, $menu = $(".menu")
		, $nav = $(".site-nav")
		, $tool = $(".cv-tool");
	
	$menu.on("click", function () {
		$(this).toggleClass("active");
		$(this).parent().find($nav).toggleClass("active");
	});
	
	$tool.on("click", function(){
		$(this).siblings(".tool-info").toggleClass("active");
	});
	
	var $grid = $('.grid').imagesLoaded(function () {
		$grid.masonry({
			columnWidth: '.grid-sizer'
			, itemSelector: '.grid-item'
			, percentPosition: true
		});
	});
}

$(function(){
	MATHS.init();

});