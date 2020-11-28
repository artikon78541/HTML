
jQuery(document).ready(function(){


    var pull 		= $('#pull');
        menu 		= $('.main-menu');
        menuHeight	= menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });


    $(window).resize(function(){
        var w = $(window).width();
        if(w > 498) {
            menu.removeAttr('style');
        }
    });
})