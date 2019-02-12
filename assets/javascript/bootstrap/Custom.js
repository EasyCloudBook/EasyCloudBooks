$(document).ready(function () {

    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');


    $.each($('.main-menu li ').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });


    if ($(window).width() > 767) {

        var heightview = "";

        $.each($('.main-menu li a').parents('li'), function (e, element) {
            $(element).click(function () {

                heightview = $(this).children('ul').height();

                var navbarHeigh = $('#main-menu').height();
                var wrapperHeigh = $('#collapsibleNavbar').height();
                var heightadd = wrapperHeigh + heightview;


                if (heightadd > navbarHeigh) {
                    $('#main-menu').css("min-height", heightadd + "px");

                }
                if (navbarHeigh > heightadd) {
                    $('#main-menu').css("min-height", $(window).height() + "px");

                }
            });

        });
        var navbarHeigh = $('#main-menu').height();
        var wrapperHeigh = $('#collapsibleNavbar').height();
        var heightadd = wrapperHeigh + heightview;


        if (heightadd > navbarHeigh) {
            $('#main-menu').css("min-height", heightadd + "px");

        }
        if (navbarHeigh > heightadd) {
            $('#main-menu').css("min-height", $(window).height() + "px");

        }


    }
   
});


   


   
