$(document).ready(function () {
    var header = $("header");
    var shrinkPoint = 20; // Adjust this value based on when you want the header to start shrinking

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 0 && scrollPosition <= shrinkPoint) {
            var shrinkFactor = scrollPosition / shrinkPoint;
            header.css({
                'height': 20 - 10 * shrinkFactor + 'vh', // Adjust the initial and final heights accordingly
                'padding': 1 - 0.5 * shrinkFactor + 'vh 20%' // Adjust the initial and final paddings accordingly
            });
        } else if (scrollPosition > shrinkPoint) {
            header.addClass("shrink");
        } else {
            header.removeClass("shrink");
        }
    });
});