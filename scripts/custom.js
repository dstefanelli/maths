$(document).ready(function () {
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
});