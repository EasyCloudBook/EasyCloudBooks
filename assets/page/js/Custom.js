$(document).ready(function () {
  
    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');


    $.each($('.main-menu li ').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });

    var heightview = "";

    if ($(window).width() > 767) {

        $(window).on("load resize scroll", function (e) {
           heightadd();
       });
        $.each($('.main-menu li a').parents('li'), function (e, element) {
            $(element).click(function () {

                heightview = $(this).children('ul').height();

                heightadd();

            });

        });

    }
	
    $('.navbarfull2').css("min-height", screen.height + 32 +  "px");
	 
	 
	$('.navbarfull2').css("min-height", screen.height + 32 + "px");
    function heightadd() {
        var mainmenu = $('.navbarfull1').height();      
        var navbarHeigh = $('#main-menu').height();
        var wrapperHeigh = $('#collapsibleNavbar').height();
		var newheight = $('.bd-content').height();
        var heightadd = wrapperHeigh + heightview;
   
        if (heightadd > navbarHeigh) {
            $('#main-menu').css("min-height", heightadd + "px");
			//$('.navbarfull1').css("min-height", newheight +  "px");
			

        }
        if (navbarHeigh > heightadd) {
            $('#main-menu').css("min-height", heightadd + "px");
			//$('.navbarfull1').css("min-height", mainmenu + "px");
			
            
        }
    }
    
        $(".bd-content").css("min-height", screen.height);
});




   
