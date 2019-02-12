$(document).ready(function () {
  
    heightadd();

    $("#main-menu").click(function () {

        heightadd();

       
    });

    $(window).bind("load resize scroll", function () {

       heightadd();
           
   });
   
  
});

function heightadd() {

    var heightview = "";

    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');

    $.each($('.main-menu li').parents('li').find('ul'), function (e, element) {
        $(element).removeClass('show');
    });

    $.each($('.main-menu li').find('a').parents('li').find('ul'), function (e, element) {
        $(element).click(function () {

            heightview = $(this).height();
            alert(heightview);
        });

    });

    $.each($('.main-menu li a').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });
    var navbarHeigh = $('#main-menu').height();
    var wrapperHeigh = $('#collapsibleNavbar').height();
    var heightadd = wrapperHeigh + heightview;
    //alert(heightview);

    if (heightadd > navbarHeigh) {
        $('#main-menu').css("min-height", heightadd + "px");

    }
    if (navbarHeigh > heightadd) {
        $('#main-menu').css("min-height", $(window).height() + "px");
     

    }
}