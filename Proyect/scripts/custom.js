var MATHS = MATHS || {};
/*
	POPUP
*/
MATHS.Popup = {};
MATHS.Popup.open = function (id, callback) {
	$("#" + id).addClass("active");
	$('body').addClass("hidden");
	if (callback) {
		callback();
	}
}
MATHS.Popup.close = function (id, callback) {
	$("#" + id).removeClass("active");
	$('body').removeClass("hidden");
	if (callback) {
		callback();
	}
}
MATHS.download = function (file) {
	document.location = file;
}
MATHS.init = function ( id ) {
	var $header = $(".site-header")
		, $menu = $(".menu")
		, $nav = $(".site-nav")
		, $tool = $(".cv-tool");
	$menu.on("click", function () {
		$(this).toggleClass("active");
		$(this).parent().find($nav).toggleClass("active");
	});
	$(".curriculum").click(function() {
		$('html, body').animate({
			scrollTop: $("#curriculum").offset().top
		}, 1000);
		$menu.removeClass("active");
		$nav.removeClass("active");
		return false;
		
	});
	$(".story").click(function() {
		$('html, body').animate({
			scrollTop: $("#story").offset().top
		}, 1000);
		$menu.removeClass("active");
		$nav.removeClass("active");
		return false;
	});
	$(".features").click(function() {
		$('html, body').animate({
			scrollTop: $("#features").offset().top
		}, 1000);
		$menu.removeClass("active");
		$nav.removeClass("active");
		return false;
	});
	$(".contact").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
		$menu.removeClass("active");
		$nav.removeClass("active");
		return false;
	});
	$tool.on("click", function () {
		$(this).siblings(".tool-info").toggleClass("active");
	});
	var $grid = $('.grid').imagesLoaded(function () {
		$grid.masonry({
			columnWidth: '.grid-sizer'
			, itemSelector: '.grid-item'
			, percentPosition: true
		});
	});
	$('.cta-topics').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var query = $this.data("query");
		$.getJSON('files/modules.json', function(data) {
			var myObj = data;
			$(".module-data > div > p").remove();
			
			for(var i in myObj.modules) {
				var module = myObj.modules[i];
				if( query == module.id ){
					var oldsrc = $("#popup-modules .module-img").attr("src"),
					    newsrc = $("#popup-modules .module-img").attr("src").replace( oldsrc ,""),
						flag2 = $("#popup-modules .module-categories:nth-child(2)"),
						flag1Text = $("#popup-modules .module-categories:nth-child(1) .text"),
						flag2Text = $("#popup-modules .module-categories:nth-child(2) .text");
						console.log(module.categories.length);
					
					if( module.categories.length < 2){
						flag2.css("display", "none");
					}else{
						flag2.css("display", "block");
					}
						
					for( var i in module.categories){
						flag1Text.text(module.categories[0]);
						flag2Text.text(module.categories[1]);
					}
					
						
					for( var i in module.text){
						$(".module-data > div").append($("<p>" + module.text[i] + "</p>"));
							
					}
						
					$("#popup-modules .module-img").attr("src", '/images/popup-modules/'+ module.imgpath);
					$("#popup-modules").find(".module-data > h3").text(module.title);
		
					
				}
			}	
		});
	});
}

$(function () {
	MATHS.init();
});