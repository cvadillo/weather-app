// Initialize Materialize CSS
M.AutoInit();







// Resize cards on smaller windows
$(window).resize(function(){

		if($(window).width() <= 860){
		$('.horizontal').removeClass('horizontal');
		}
		if(860 <= $(window).width()){
			$('.main-weather').addClass('horizontal');
		}

		if($(window).width() <= 1200){
		$('.daily').removeClass('m2');
		}
		if(1200 <= $(window).width()){
			$('.daily').addClass('m2');
		}

    });