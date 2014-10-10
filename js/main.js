'use strict';
$(document).ready(function() {
        var htmlbody = $('html,body');
        var dataslide = null;

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
            var page = $('.slide[data-slide="' + dataslide + '"]');
            htmlbody.animate({
                scrollTop: page.offset().top
            }, 1000, 'easeInOutQuint');
            // Span the full page in slide show mode.
            if (dataslide !== "5" && dataslide !== "6" && dataslide !== "3") {
                page.height($(window).height());
            }
        }
    

    $('.next').click(function(e) {
        dataslide = $(this).attr('data-slide');
            e.preventDefault();
            goToByScroll(dataslide);
    });
});